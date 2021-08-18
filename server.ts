/**
 * 这是一个服务端程序
 */
class UdpPunchServer
{
	private config: UdpPunchServerConfig;
	constructor(config: UdpPunchServerConfig){
		this.config = config;
	}

	/**
	 * 运行服务器
	 */

	public run() {
		console.log("Hello server");
	}
};

interface UdpPunchServerConfig {
	localPort: number,
	localHost: string
};

let config: UdpPunchServerConfig = {
	localPort: 10000,
	localHost: "localhost"
};

(new UdpPunchServer(config)).run();
