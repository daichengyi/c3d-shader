import { _decorator, Component, Node, Material } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CodeToShader')
export class CodeToShader extends Component {
    start() {

    }

    update(deltaTime: number) {

    }

    //代码 创建材质
    createMaterial() {
        const mat = new Material();
        mat.initialize({
            effectName: 'pipelines/skybox',
            defines: {
                USE_RGBE_CUBEMAP: true
            },
        });
    }

}


