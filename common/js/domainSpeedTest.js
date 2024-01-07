export async function testDomainSpeeds() {
    const domains = [
        "https://api.roadreachbid.com/api",
        "https://api.broadreachbid.org/api",
        "https://api.broadreachbid.top/api",
        "https://api.broadreachbid.xyz/api",
        "https://api.broadreachllc.biz/api",
        "https://api.broadreachllc.net/api",
        "https://api.broadreachiso.net/api"
    ];

    function testSpeed(domain) {
        return new Promise((resolve, reject) => {
            fetch(domain + '/index/getStockProduct?product_id=1', { mode: 'no-cors' })
                .then(() => resolve(domain))
                .catch(() => reject(domain));
        });
    }

    try {
        const fastestDomain = await Promise.race(domains.map(testSpeed));
        return fastestDomain;
    } catch (error) {
        console.error(`Error with domain: ${error}`);
        return null; // 或返回一个默认域名
    }
}
