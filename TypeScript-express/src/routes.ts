import { Router } from 'express'
const router: Router = Router()

import { Get, Post, Put, Delete } from './controllers/person'


router.get('/', Get)
router.post('/', Post)
router.put('/', Put)
router.delete('/', Delete)

export = router