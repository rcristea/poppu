package com.poppu.server.repository;

import com.poppu.server.model.AddressModel;
import com.poppu.server.model.PaymentInfoModel;
import com.poppu.server.model.UserModel;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "inlineUserProfile", types = {UserModel.class})
public interface InlineUserProfile {
    long getId();
    AddressModel getAddress();
    List<PaymentInfoModel> getPaymentCards();
}
