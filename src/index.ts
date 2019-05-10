import $operation from "./operation"
import $driver from "./driver";
import $create from "./create"
import $bite from "./bite"
import css from "./css"
import event from "./event"
import property from "./property"



export default ( d = document ) => {
    const operation = $operation(d)
    const driver = $driver(operation.append)
    const create = $create(d,driver)
    const bite = $bite(driver)

    const p = event.add.submit(e => {})

    driver(create.div())(p)

    return {
        operation,
        driver,
        create,
        bite,
        css,
        event,
        property
    }
}
