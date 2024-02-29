// served at /path/to/plugin

function main() {
    return {
        headers: {},
        body: "Plugin Invoked Successfully",
        statusCode: 200
    };
};

export default main;
