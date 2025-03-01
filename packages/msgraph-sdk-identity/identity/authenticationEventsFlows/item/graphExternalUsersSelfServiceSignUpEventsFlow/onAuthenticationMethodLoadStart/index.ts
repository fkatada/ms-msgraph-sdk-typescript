/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createOnAuthenticationMethodLoadStartHandlerFromDiscriminatorValue, type OnAuthenticationMethodLoadStartHandler } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilderNavigationMetadata, GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilderRequestsMetadata, type GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilder } from './graphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/graph.externalUsersSelfServiceSignUpEventsFlow/onAuthenticationMethodLoadStart
 */
export interface OnAuthenticationMethodLoadStartRequestBuilder extends BaseRequestBuilder<OnAuthenticationMethodLoadStartRequestBuilder> {
    /**
     * Casts the previous resource to onAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp.
     */
    get graphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp(): GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilder;
    /**
     * Required. The configuration for what to invoke when authentication methods are ready to be presented to the user. Must have at least one identity provider linked.  Supports $filter (eq). See support for filtering on user flows for syntax information.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnAuthenticationMethodLoadStartHandler>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<OnAuthenticationMethodLoadStartRequestBuilderGetQueryParameters> | undefined) : Promise<OnAuthenticationMethodLoadStartHandler | undefined>;
    /**
     * Required. The configuration for what to invoke when authentication methods are ready to be presented to the user. Must have at least one identity provider linked.  Supports $filter (eq). See support for filtering on user flows for syntax information.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OnAuthenticationMethodLoadStartRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Required. The configuration for what to invoke when authentication methods are ready to be presented to the user. Must have at least one identity provider linked.  Supports $filter (eq). See support for filtering on user flows for syntax information.
 */
export interface OnAuthenticationMethodLoadStartRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const OnAuthenticationMethodLoadStartRequestBuilderUriTemplate = "{+baseurl}/identity/authenticationEventsFlows/{authenticationEventsFlow%2Did}/graph.externalUsersSelfServiceSignUpEventsFlow/onAuthenticationMethodLoadStart{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OnAuthenticationMethodLoadStartRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const OnAuthenticationMethodLoadStartRequestBuilderNavigationMetadata: Record<Exclude<keyof OnAuthenticationMethodLoadStartRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    graphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp: {
        requestsMetadata: GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilderRequestsMetadata,
        navigationMetadata: GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OnAuthenticationMethodLoadStartRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: OnAuthenticationMethodLoadStartRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnAuthenticationMethodLoadStartHandlerFromDiscriminatorValue,
        queryParametersMapper: OnAuthenticationMethodLoadStartRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
