

class MySharedServices {

    baseUrl = "http://www.getup.agency/dev/react";

    // TODO : inclure les .then dans ce fichier
    async getArretesList() {
        const res = await fetch(this.baseUrl + "/api.php");
        return res;
    };

}

const mySS = new MySharedServices();
export default mySS;