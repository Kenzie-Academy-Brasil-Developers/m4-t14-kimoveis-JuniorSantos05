import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";

export const listRealEstatesServices = async () => {
    
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const findRealEstates: Array<RealEstate> = await realEstateRepository.find({
        relations:{ address:true }
    });

    return findRealEstates;
  };