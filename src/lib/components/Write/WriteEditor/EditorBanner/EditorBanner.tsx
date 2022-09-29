import useWrite from "lib/write";
import React, { useEffect, useState } from "react";

const EditorBanner = () => {
  const { WriteEditorState, setBanner } = useWrite();

  const { banner } = WriteEditorState;

  const [src, setSrc] = useState<string>();

  useEffect(() => {
    banner && setSrc(URL.createObjectURL(banner));
  }, [banner]);

  const onDropImg = (e: React.DragEvent) => {
    e.preventDefault();
    setBanner(e.dataTransfer.files[0]);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      let fileData = e.target.files[0];
      setBanner(fileData);
    }
  };

  return (
    <>
      {src ? (
        <label htmlFor="banner">
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={src}
            alt=""
          />
        </label>
      ) : (
        <label htmlFor="banner">이미지 없음</label>
      )}
      <input
        type="file"
        id="banner"
        onDrop={(e) => {
          onDropImg(e);
        }}
        onChange={(e) => {
          onChange(e);
        }}
        style={{ width: "0px" }}
      />
    </>
  );
};

export default EditorBanner;
