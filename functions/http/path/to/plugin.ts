// served at /path/to/plugin

export default () => {
    return {
        headers: {},
        body: "Plugin Invoked Successfully",
        statusCode: 200
    };
};