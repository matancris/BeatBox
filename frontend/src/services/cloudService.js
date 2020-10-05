export const cloudService = {
    uploadImg,
    makeFaceThumb
}

async function uploadImg(ev) {
    const CLOUD_NAME = "dawzeno7k"
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData();
    formData.append('file', ev.target.files[0])
    formData.append('upload_preset', 'beatboximg');
    try {
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
        const data = await res.json()
        return data.secure_url
    } catch (err) {
        console.log(err);
    }
}

function makeFaceThumb(img) {
    let imgUrl = img.split('/');
    imgUrl.splice(6, 0, 'w_200,h_200,c_thumb,g_face')
    imgUrl = imgUrl.join('/')
    return imgUrl;
}