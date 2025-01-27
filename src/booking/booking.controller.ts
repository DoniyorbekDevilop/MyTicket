import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Booking")
@Controller("booking")
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post("create")
  async create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get("all")
  async findAll() {
    return this.bookingService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.bookingService.findOne(+id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateBookingDto: UpdateBookingDto
  ) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.bookingService.remove(+id);
  }
}
