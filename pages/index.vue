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

#text-element {
    position: absolute;
    width: 800px;
    height: 800px;
    padding: 8px;
}

#ar-elements {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -100;
    font-size: 400%;
}

main {
    box-sizing: border-box;
    margin-top: 80vh;
    width: 100%;
    padding: 1em;
    background-color: white;

    line-height: 1.3;
    display: flex;
    justify-content: center;
}

article {
    max-width: 80em;
}
</style>

<template>
    <div>
        <div ref=scene>
            <a-scene embedded vr-mode-ui="enabled: false" v-pre>
                <a-assets v-pre>
                    <img id=picture src="~assets/tea.png">
                </a-assets>

                <a-plane src="#picture" position="0 0 -4" rotation="-90 0 0" width=4 height=4 />
                <a-plane id=text-plane material="shader: html; target: #text-element; fps: 30; transparent: true" width=3 height=3 position="0 1.7 -4" rotation="0 0 0" />

                <a-sky color="#eee" />
            </a-scene>
        </div>

        <div id=ar-elements>
            <div id=text-element :style="{color: color}">
                <h1>A-Frame<br>Nuxt.js test</h1>
                <p>this is a test of A-Frame and Nuxt.js</p>
                <p>
                    <!-- XXX: didn't work mustache data binding. why? -->
                    current color: <span v-html=color /><br>
                    current position: <span v-html=position.y />

                </p>
            </div>
        </div>

        <main>
            <article>
                <h1>A-Frame / Nuxt.js test</h1>
				<p>Drag 3D area to move the point of view. And press <b>WASD</b> to move camera.</p>
				<section>
					<h2>control parameters from nuxt.js</h2>
					<p>
						<label>color: <select v-model=color>
							<option value="red">red</option>
							<option value="green">green</option>
							<option value="blue">blue</option>
						</select></label><br>
						<label>position Y: <input type=range min=0 max=3 step=0.1 v-model=position.y></label>
					</p>
				</section>
                <section>
                    <h2>how to get started</h2>
                    <ol>
                        <li>git clone <a href="https://github.com/macrat/aframe-nuxt-test">https://github.com/macrat/aframe-nuxt-test.git</a> &amp;&amp; cd aframe-nuxt-test</li>
                        <li>npm install</li>
                        <li>npm start</li>
                        <li>open <a href="http://localhost:3000">http://localhost:3000</a></li>
                    </ol>
                </section>
                <section>
                    <h2>dummy text</h2>
                    <p v-for="_ in [...new Array(30)]">dummy text for scroll</p>
                </section>
            </article>
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
            color: 'red',
            position: {x: 0, y: 1.7, z: -4},
        };
    },
    watch: {
        position: {
            handler(val) {
                this.$refs.scene.querySelector('#text-plane').setAttribute('position', val);
            },
            deep: true,
        },
    },
};
</script>
