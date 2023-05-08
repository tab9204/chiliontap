//images => array of imgage paths
export const loadImages = (images)=>{
    let allImages = [];
    images.forEach(src => {
        const img = new Image();
		img.src = src;
        const promise = new Promise((resolve)=>{
            img.onload = ()=>{
                resolve();
            }
            img.onerror = ()=>{
                resolve();
            }
        })
        allImages.push(promise);
    });

   return Promise.all(allImages).then(()=>{
       return true;
    });
}