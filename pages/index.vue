<style>
body {
    margin: 0;
}

a-scene {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}

#elements {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
	font-size: 400%;
}

#teb {
    position: absolute;
    width: 800px;
    height: 600px;
    padding: 8px;
}

main {
    box-sizing: border-box;
    margin-top: 90vh;
    width: 100%;
    padding: 1em;
    background-color: white;
}
</style>

<template>
    <div>
        <a-scene embedded vr-mode-ui="enabled: false" v-pre>
            <a-assets v-pre>
                <img id=tea src="~assets/tea.png">
            </a-assets>

            <a-plane src="#tea" position="0 0 -4" rotation="-90 0 0" width=4 height=4 />
            <a-plane material="shader: html; target: #teb; fps: 30; transparent: true" width=3 height=2 position="0 1 -4" rotation="0 0 0" />
            <a-sky color="#ECECEC" />
        </a-scene>

        <div id=elements>
            <div id=teb :style=style>
                <h1>hello world!</h1>
                this is a teb<br>
                <span v-html=text />
            </div>
        </div>

        <main>
            <h1>hello world</h1>
            <p>this is a test site</p>
            <p><input v-model=text /></p>
        </main>
    </div>
</template>

<script>
export default {
    head: {
        script: [
            {src: 'https://unpkg.com/aframe/dist/aframe-master.min.js'},
            {src: 'https://unpkg.com/aframe-html-shader/dist/aframe-html-shader.min.js'},
        ],
    },
    data() {
        return {
            text: 'foobar',
        };
    },
    computed: {
        style() {
            return {
                'color': (this.text === 'foobar') ? 'red' : (this.text ? 'green' : 'blue'),
            };
        },
    },
};
</script>
