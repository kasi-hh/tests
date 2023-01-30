<template>
    <q-list>
        <q-item to="/layout">Test</q-item>
        <q-item clickable to="/forms">
            <q-item-section avatar>
                <q-icon name="ballot"></q-icon>
            </q-item-section>
            <q-item-section>
                <q-item-label>Forms</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable to="/cards">
            <q-item-section avatar>
                <q-icon name="ballot"></q-icon>
            </q-item-section>
            <q-item-section>
                <q-item-label>Cards</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable to="/dhtmlx">
            <q-item-section avatar>
                <q-icon name="ballot"></q-icon>
            </q-item-section>
            <q-item-section>
                <q-item-label>DHTMLX</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable to="/test-tool">
            <q-item-section avatar>
                <q-icon name="weekend"></q-icon>
            </q-item-section>
            <q-item-section>
                <q-item-label>Test Tool</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable to="/mite">
            <q-item-section avatar>
                <q-icon name="access_time"></q-icon>
            </q-item-section>
            <q-item-section>
                <q-item-label>Mite</q-item-label>
            </q-item-section>
        </q-item>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="http://v1.quasar-framework.org">
            <q-item-section avatar>
                <q-icon name="school" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Docs</q-item-label>
                <q-item-label caption>v1.quasar-framework.org</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
            <q-item-section avatar>
                <q-icon name="code" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Github</q-item-label>
                <q-item-label caption>github.com/quasarframework</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="http://chat.quasar-framework.org">
            <q-item-section avatar>
                <q-icon name="chat" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Discord Chat Channel</q-item-label>
                <q-item-label caption>chat.quasar-framework.org</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar-framework.org">
            <q-item-section avatar>
                <q-icon name="record_voice_over" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Forum</q-item-label>
                <q-item-label caption>forum.quasar-framework.org</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">
            <q-item-section avatar>
                <q-icon name="rss_feed" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Twitter</q-item-label>
                <q-item-label caption>@quasarframework</q-item-label>
            </q-item-section>
        </q-item>
    </q-list>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

</style>