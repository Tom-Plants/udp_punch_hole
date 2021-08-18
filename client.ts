/**
 * 这是一个udp打洞程序的客户端
 */
class UdpPunchClient
{
    private config: UdpPunchClientConfig;
    constructor(config: UdpPunchClientConfig) {
        this.config = config;
    };

    /**
     * 运行服务器
     */
    public run() {
        console.log("Hello World");
    }
};

interface UdpPunchClientConfig {
    localPort: number,
    serverPort: number,
    localHost: string,
    remoteHost: string
};

let config:UdpPunchClientConfig = {
    localPort: 10000,
    serverPort: 10000,
    localHost: "localhost",
    remoteHost: "ali1.0x7c00.site"
};


(new UdpPunchClient(config)).run();