class KiteSurfClient {
    canISurf() {
        const random = Math.random();
        if (random < 0.5) {
            return "no";
        } else {
            return "yes";
        }
    }
}

export default KiteSurfClient;
