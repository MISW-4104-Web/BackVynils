import { Controller, Put, Param, Body, UseInterceptors } from '@nestjs/common';
import { VinylRecordLabelService } from './vinylrecordlabel.service';
import { RecordLabelDto } from "../recordlabel/recordlabel.dto";
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";

@Controller('books')
@UseInterceptors(BusinessErrorsInterceptor)
export class VinylRecordLabelController {

    constructor(private readonly bookeditorialService: VinylRecordLabelService) { }

    @Put(':bookId/editorial/')
    async associateAuthorVinyl(@Param('bookId') bookId: number,
        @Body() editorialDto: RecordLabelDto) {
        return await this.bookeditorialService.associateVinylRecordLabel(bookId, editorialDto);
    }
}
