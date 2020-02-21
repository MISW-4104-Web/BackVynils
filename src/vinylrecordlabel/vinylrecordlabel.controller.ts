import { Controller, Put, Param, Body, UseInterceptors } from '@nestjs/common';
import { VinylRecordLabelService } from './vinylrecordlabel.service';
import { RecordLabelDto } from "../recordlabel/recordlabel.dto";
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";

@Controller('vinyls')
@UseInterceptors(BusinessErrorsInterceptor)
export class VinylRecordLabelController {

    constructor(private readonly bookeditorialService: VinylRecordLabelService) { }

    @Put(':vinylId/recordlabels/')
    async associateAuthorVinyl(@Param('vinylId') vinylId: number,
        @Body() recordLabelDto: RecordLabelDto) {
        return await this.bookeditorialService.associateVinylRecordLabel(vinylId, recordLabelDto);
    }
}
