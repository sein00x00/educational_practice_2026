$(() => {
    const SCHEMA_LIGHT = 'light';
    const SCHEMA_DARK = 'dark';
    
    // 🔧 АВТОМАТИЧЕСКИ ОПРЕДЕЛЯЕМ ПУТЬ
    const getBasePath = () => {
        // Если мы на GitHub Pages
        if (window.location.hostname === 'sein00x00.github.io') {
            return '/educational_practice_2026/css';
        }
        // Локально
        return '/css';
    }
    
    let currentSchema;

    const getSchema = () => currentSchema = localStorage.getItem('schema');

    const setSchema = (schema) => localStorage.setItem('schema', schema);
    
    const getFileSchema = () => `${currentSchema}-theme.css`;

    const loadCss = (file) => {
        if (file) {
            // Удаляем старую тему, если есть
            $("#theme-css").remove();
            $('<link>')
                .attr({
                    id: "theme-css",
                    rel: "stylesheet",
                    href: `${getBasePath()}/${file}`
                })
                .appendTo('head')
            console.log('Загружена тема:', `${getBasePath()}/${file}`); // Для отладки
        }
    }

    $('.toggle').on('click', () => {
        currentSchema = currentSchema === SCHEMA_LIGHT 
            ? SCHEMA_DARK
            : SCHEMA_LIGHT
        setSchema(currentSchema)  
        loadCss(getFileSchema())
    });

    (() => {        
        currentSchema = getSchema();
        if (!currentSchema) {
            currentSchema = SCHEMA_LIGHT;
            setSchema(currentSchema);
        }
        loadCss(getFileSchema());
    })()
})
