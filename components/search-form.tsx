import {z} from 'zod'

const FormSchema = z.object({
    address: z.string(),
    arrivingon: z.date({
        required_error: "Date is required"
    }),
    // gps coords
    gpscoords: z.object({
        lat: z.number(),
        lng: z.number()
    }),
    arrivingtime: z.string({
        required_error: "Time is required"
    }),
    leavingtime: z.string({
        required_error: "Time is required"
    })
})
