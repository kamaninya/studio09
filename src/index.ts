// index.ts
import{ initWebGL } from "./context.js"; //context.tsから届いたもの
import{ initProgram } from "./shader.js"; //shader.tsから届いたもの
import{ initBuffers } from "./buffer.js"; //buffer.tsから届いたもの
import{ drawScene } from "./render.js"; //render.tsから届いたもの


// export default function main(){ //変更前04
// export default function main(vertices: number[], vertexComponentNumber: number){ //変更前05
export default function main(vertices: number[], vertexComponentNumber: number, vertexShaderStr: string, fragmentShaderStr: string){
    const canvas = document.getElementById('world') as HTMLCanvasElement;
    const gl = initWebGL(canvas);
    
    if(gl == null){
        return false;
    }
    
    // const shaderProgram = initProgram(gl); //変更前05
    const shaderProgram = initProgram(gl, vertexShaderStr, fragmentShaderStr);
    if(shaderProgram == null){
        return false;
    }
    
    // const vertexBuffer = initBuffers(gl);　//変更前04
    const vertexBuffer = initBuffers(gl, vertices, vertexComponentNumber);
    
    // カラーをクリアする際の色を指定します（黒に設定）
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // 深度テストを有効化します
    gl.enable(gl.DEPTH_TEST);
    
    drawScene(gl, vertexBuffer, shaderProgram);
    
    return true;
}
