import $operation from "./operation"
import $driver from "./driver";
import $create from "./create"
import $bite from "./bite"
import css from "./css"
import event from "./event"
import property from "./property"
import clone from "./clone"


export default ( d = document ) => {
    const operation = $operation(d)
    const driver = $driver(operation.append)
    const create = $create(d,driver)
    const bite = $bite(driver)
    return {
        operation,
        driver,
        create,
        bite,
        css,
        event,
        property,
        clone
    }
}
