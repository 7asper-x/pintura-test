"use client";

// Import the editor styles
import "@pqina/pintura/pintura.css";

// Import the editor default configuration
import { getEditorDefaults } from "@pqina/pintura";

// Import the editor component from `react-pintura`
import { PinturaEditor } from "@pqina/react-pintura";

import jasper from "./images/jasper.jpg";

// get default properties
const editorConfig = getEditorDefaults();

export default function Home() {
  return (
    <div className="h-full">
      <h1>Image Editor</h1>
      <div className="h-full">
        <PinturaEditor
          {...editorConfig}
          src={jasper.src}
          imageCropAspectRatio={1}
        ></PinturaEditor>
      </div>
    </div>
  );
}
