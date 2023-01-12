const getCars = async () => {
    const res = await fetch('http://localhost:3333/api/cars');
    const data = await res.json();
    console.log(data);
    return data
}

const currencyFormatter = (value) => {
    return new Intl.NumberFormat('mn-MN', { maximumSignificantDigits: 3 }).format(value)
}

const getCarCard = (car) => {
    return `
    <div class="col-3">
        <div class="card">
            <div class="ratio ratio-4x3">
              <img
                src="${car.imageUrl}"
                class="card-img-top"
                alt=""
              />
            </div>
            <div class="card-body">
              <p class="card-name">${car.model}</p>
              <p class="card-category">${car.brand}</p>
              <p class="card-name card-price">${currencyFormatter(car.price)}</p>
              <div class="d-flex justify-content-end gap-3">
                <button type="button" class="btn btn-success" onclick="fixCar(${car.id})">Засах</button>
                <button type="button" class="btn btn-danger" onclick="deleteCar(${car.id})" >Устгах</button>
              </div>
            </div>
        </div>
    </div>`
}

const carsTarget = document.querySelector(`#cars`)

const getCarsHtml = async () => {
    carsTarget.innerHTML = ``
    const cars = await getCars();
    for (const car of cars) {
        carsTarget.innerHTML += getCarCard(car)
    }
}

getCarsHtml()


const submitBtn = document.querySelector(`#formSubmit`)

const imageUrlTarget = document.querySelector(`#imageUrl`)
const modelTarget = document.querySelector(`#model`)
const brandTarget = document.querySelector(`#brand`)
const priceTarget = document.querySelector(`#price`)

//modal nemeh
submitBtn.addEventListener(`click`, async () => {
    const newCar = {
        imageUrl: imageUrlTarget.value,
        model: modelTarget.value,
        brand: brandTarget.value,
        price: priceTarget.value,
    }
    const req = await fetch('http://localhost:3333/api/cars', {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCar)
    })
    const res = await req.json();
    console.log(res)
    getCarsHtml
})

//modal ustgah
const deleteCar = (id) => {
    if (confirm(`Устгах уу`))
        fetch('http://localhost:3333/api/cars', {
            method: `DELETE`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        })
            .then(res => res.json())
            .catch(err => {
                alert(`Амжилттай устгалаа`)
                getCarsHtml()
            })
}

const modal = new bootstrap.Modal(document.getElementById(`modal`));
//haruulna
// modal.show();
//nuuna
// modal.hide();

//modal zasah
const getCar = async (id) => {
    const res = await fetch('http://localhost:3333/api/cars/' + id);
    const data = await res.json();
    return data;
}
const fixCar = async (id) => {
    submitBtn.innerHTML = ''
    const car = await getCar(id);
    imageUrlTarget.value = car.imageUrl;
    modelTarget.value = car.model;
    brandTarget.value = car.brand;
    priceTarget.value = car.price;
    modal.show()



    const res = await edited.json();
    console.log(res)
    getCarsHtml
}
const ediBtBtn = () => {
    return `<button type="button" class="btn btn-success")">edited</button>`
}