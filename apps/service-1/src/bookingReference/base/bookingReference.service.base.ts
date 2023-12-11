/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  BookingReference, // @ts-ignore
  Booking,
} from "@prisma/client";

export class BookingReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BookingReferenceCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingReferenceCountArgs>
  ): Promise<number> {
    return this.prisma.bookingReference.count(args);
  }

  async bookingReferences<T extends Prisma.BookingReferenceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingReferenceFindManyArgs>
  ): Promise<BookingReference[]> {
    return this.prisma.bookingReference.findMany(args);
  }
  async bookingReference<T extends Prisma.BookingReferenceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingReferenceFindUniqueArgs>
  ): Promise<BookingReference | null> {
    return this.prisma.bookingReference.findUnique(args);
  }
  async createBookingReference<T extends Prisma.BookingReferenceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingReferenceCreateArgs>
  ): Promise<BookingReference> {
    return this.prisma.bookingReference.create<T>(args);
  }
  async updateBookingReference<T extends Prisma.BookingReferenceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingReferenceUpdateArgs>
  ): Promise<BookingReference> {
    return this.prisma.bookingReference.update<T>(args);
  }
  async deleteBookingReference<T extends Prisma.BookingReferenceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingReferenceDeleteArgs>
  ): Promise<BookingReference> {
    return this.prisma.bookingReference.delete(args);
  }

  async getBooking(parentId: number): Promise<Booking | null> {
    return this.prisma.bookingReference
      .findUnique({
        where: { id: parentId },
      })
      .booking();
  }
}
