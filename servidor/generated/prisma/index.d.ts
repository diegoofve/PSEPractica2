
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model movie
 * 
 */
export type movie = $Result.DefaultSelection<Prisma.$moviePayload>
/**
 * Model points
 * 
 */
export type points = $Result.DefaultSelection<Prisma.$pointsPayload>
/**
 * Model sales
 * 
 */
export type sales = $Result.DefaultSelection<Prisma.$salesPayload>
/**
 * Model show_timing
 * 
 */
export type show_timing = $Result.DefaultSelection<Prisma.$show_timingPayload>
/**
 * Model theater
 * 
 */
export type theater = $Result.DefaultSelection<Prisma.$theaterPayload>
/**
 * Model timeslot
 * 
 */
export type timeslot = $Result.DefaultSelection<Prisma.$timeslotPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CLIENT: 'CLIENT',
  CINEMA: 'CINEMA',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Movies
 * const movies = await prisma.movie.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.movie`: Exposes CRUD operations for the **movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.movieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.points`: Exposes CRUD operations for the **points** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.points.findMany()
    * ```
    */
  get points(): Prisma.pointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.salesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.show_timing`: Exposes CRUD operations for the **show_timing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Show_timings
    * const show_timings = await prisma.show_timing.findMany()
    * ```
    */
  get show_timing(): Prisma.show_timingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theater`: Exposes CRUD operations for the **theater** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Theaters
    * const theaters = await prisma.theater.findMany()
    * ```
    */
  get theater(): Prisma.theaterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeslot`: Exposes CRUD operations for the **timeslot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timeslots
    * const timeslots = await prisma.timeslot.findMany()
    * ```
    */
  get timeslot(): Prisma.timeslotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    movie: 'movie',
    points: 'points',
    sales: 'sales',
    show_timing: 'show_timing',
    theater: 'theater',
    timeslot: 'timeslot',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "movie" | "points" | "sales" | "show_timing" | "theater" | "timeslot" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      movie: {
        payload: Prisma.$moviePayload<ExtArgs>
        fields: Prisma.movieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.movieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.movieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          findFirst: {
            args: Prisma.movieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.movieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          findMany: {
            args: Prisma.movieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>[]
          }
          create: {
            args: Prisma.movieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          createMany: {
            args: Prisma.movieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.movieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>[]
          }
          delete: {
            args: Prisma.movieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          update: {
            args: Prisma.movieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          deleteMany: {
            args: Prisma.movieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.movieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.movieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>[]
          }
          upsert: {
            args: Prisma.movieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.movieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.movieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      points: {
        payload: Prisma.$pointsPayload<ExtArgs>
        fields: Prisma.pointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>
          }
          findFirst: {
            args: Prisma.pointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>
          }
          findMany: {
            args: Prisma.pointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>[]
          }
          create: {
            args: Prisma.pointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>
          }
          createMany: {
            args: Prisma.pointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>[]
          }
          delete: {
            args: Prisma.pointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>
          }
          update: {
            args: Prisma.pointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>
          }
          deleteMany: {
            args: Prisma.pointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>[]
          }
          upsert: {
            args: Prisma.pointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pointsPayload>
          }
          aggregate: {
            args: Prisma.PointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoints>
          }
          groupBy: {
            args: Prisma.pointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.pointsCountArgs<ExtArgs>
            result: $Utils.Optional<PointsCountAggregateOutputType> | number
          }
        }
      }
      sales: {
        payload: Prisma.$salesPayload<ExtArgs>
        fields: Prisma.salesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.salesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.salesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          findFirst: {
            args: Prisma.salesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.salesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          findMany: {
            args: Prisma.salesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          create: {
            args: Prisma.salesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          createMany: {
            args: Prisma.salesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.salesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          delete: {
            args: Prisma.salesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          update: {
            args: Prisma.salesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          deleteMany: {
            args: Prisma.salesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.salesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.salesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          upsert: {
            args: Prisma.salesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.salesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.salesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
      show_timing: {
        payload: Prisma.$show_timingPayload<ExtArgs>
        fields: Prisma.show_timingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.show_timingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_timingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.show_timingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_timingPayload>
          }
          findFirst: {
            args: Prisma.show_timingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_timingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.show_timingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_timingPayload>
          }
          findMany: {
            args: Prisma.show_timingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_timingPayload>[]
          }
          create: {
            args: Prisma.show_timingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_timingPayload>
          }
          createMany: {
            args: Prisma.show_timingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.show_timingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_timingPayload>[]
          }
          delete: {
            args: Prisma.show_timingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_timingPayload>
          }
          update: {
            args: Prisma.show_timingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_timingPayload>
          }
          deleteMany: {
            args: Prisma.show_timingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.show_timingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.show_timingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_timingPayload>[]
          }
          upsert: {
            args: Prisma.show_timingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_timingPayload>
          }
          aggregate: {
            args: Prisma.Show_timingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShow_timing>
          }
          groupBy: {
            args: Prisma.show_timingGroupByArgs<ExtArgs>
            result: $Utils.Optional<Show_timingGroupByOutputType>[]
          }
          count: {
            args: Prisma.show_timingCountArgs<ExtArgs>
            result: $Utils.Optional<Show_timingCountAggregateOutputType> | number
          }
        }
      }
      theater: {
        payload: Prisma.$theaterPayload<ExtArgs>
        fields: Prisma.theaterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.theaterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theaterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.theaterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theaterPayload>
          }
          findFirst: {
            args: Prisma.theaterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theaterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.theaterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theaterPayload>
          }
          findMany: {
            args: Prisma.theaterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theaterPayload>[]
          }
          create: {
            args: Prisma.theaterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theaterPayload>
          }
          createMany: {
            args: Prisma.theaterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.theaterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theaterPayload>[]
          }
          delete: {
            args: Prisma.theaterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theaterPayload>
          }
          update: {
            args: Prisma.theaterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theaterPayload>
          }
          deleteMany: {
            args: Prisma.theaterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.theaterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.theaterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theaterPayload>[]
          }
          upsert: {
            args: Prisma.theaterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$theaterPayload>
          }
          aggregate: {
            args: Prisma.TheaterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheater>
          }
          groupBy: {
            args: Prisma.theaterGroupByArgs<ExtArgs>
            result: $Utils.Optional<TheaterGroupByOutputType>[]
          }
          count: {
            args: Prisma.theaterCountArgs<ExtArgs>
            result: $Utils.Optional<TheaterCountAggregateOutputType> | number
          }
        }
      }
      timeslot: {
        payload: Prisma.$timeslotPayload<ExtArgs>
        fields: Prisma.timeslotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.timeslotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timeslotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.timeslotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timeslotPayload>
          }
          findFirst: {
            args: Prisma.timeslotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timeslotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.timeslotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timeslotPayload>
          }
          findMany: {
            args: Prisma.timeslotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timeslotPayload>[]
          }
          create: {
            args: Prisma.timeslotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timeslotPayload>
          }
          createMany: {
            args: Prisma.timeslotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.timeslotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timeslotPayload>[]
          }
          delete: {
            args: Prisma.timeslotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timeslotPayload>
          }
          update: {
            args: Prisma.timeslotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timeslotPayload>
          }
          deleteMany: {
            args: Prisma.timeslotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.timeslotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.timeslotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timeslotPayload>[]
          }
          upsert: {
            args: Prisma.timeslotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timeslotPayload>
          }
          aggregate: {
            args: Prisma.TimeslotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeslot>
          }
          groupBy: {
            args: Prisma.timeslotGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeslotGroupByOutputType>[]
          }
          count: {
            args: Prisma.timeslotCountArgs<ExtArgs>
            result: $Utils.Optional<TimeslotCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    movie?: movieOmit
    points?: pointsOmit
    sales?: salesOmit
    show_timing?: show_timingOmit
    theater?: theaterOmit
    timeslot?: timeslotOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    id: number | null
  }

  export type MovieSumAggregateOutputType = {
    id: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: number | null
    name: string | null
    actors: string | null
  }

  export type MovieMaxAggregateOutputType = {
    id: number | null
    name: string | null
    actors: string | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    name: number
    actors: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    id?: true
  }

  export type MovieSumAggregateInputType = {
    id?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    name?: true
    actors?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    name?: true
    actors?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    name?: true
    actors?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movie to aggregate.
     */
    where?: movieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: movieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type movieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieWhereInput
    orderBy?: movieOrderByWithAggregationInput | movieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: movieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: number
    name: string
    actors: string
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends movieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type movieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    actors?: boolean
  }, ExtArgs["result"]["movie"]>

  export type movieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    actors?: boolean
  }, ExtArgs["result"]["movie"]>

  export type movieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    actors?: boolean
  }, ExtArgs["result"]["movie"]>

  export type movieSelectScalar = {
    id?: boolean
    name?: boolean
    actors?: boolean
  }

  export type movieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "actors", ExtArgs["result"]["movie"]>

  export type $moviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movie"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      actors: string
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type movieGetPayload<S extends boolean | null | undefined | movieDefaultArgs> = $Result.GetResult<Prisma.$moviePayload, S>

  type movieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<movieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface movieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movie'], meta: { name: 'movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {movieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends movieFindUniqueArgs>(args: SelectSubset<T, movieFindUniqueArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {movieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends movieFindUniqueOrThrowArgs>(args: SelectSubset<T, movieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends movieFindFirstArgs>(args?: SelectSubset<T, movieFindFirstArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends movieFindFirstOrThrowArgs>(args?: SelectSubset<T, movieFindFirstOrThrowArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends movieFindManyArgs>(args?: SelectSubset<T, movieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {movieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends movieCreateArgs>(args: SelectSubset<T, movieCreateArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {movieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends movieCreateManyArgs>(args?: SelectSubset<T, movieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {movieCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends movieCreateManyAndReturnArgs>(args?: SelectSubset<T, movieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movie.
     * @param {movieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends movieDeleteArgs>(args: SelectSubset<T, movieDeleteArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {movieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends movieUpdateArgs>(args: SelectSubset<T, movieUpdateArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {movieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends movieDeleteManyArgs>(args?: SelectSubset<T, movieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends movieUpdateManyArgs>(args: SelectSubset<T, movieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {movieUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends movieUpdateManyAndReturnArgs>(args: SelectSubset<T, movieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movie.
     * @param {movieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends movieUpsertArgs>(args: SelectSubset<T, movieUpsertArgs<ExtArgs>>): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends movieCountArgs>(
      args?: Subset<T, movieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends movieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movieGroupByArgs['orderBy'] }
        : { orderBy?: movieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, movieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movie model
   */
  readonly fields: movieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the movie model
   */
  interface movieFieldRefs {
    readonly id: FieldRef<"movie", 'Int'>
    readonly name: FieldRef<"movie", 'String'>
    readonly actors: FieldRef<"movie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * movie findUnique
   */
  export type movieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movie
     */
    omit?: movieOmit<ExtArgs> | null
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput
  }

  /**
   * movie findUniqueOrThrow
   */
  export type movieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movie
     */
    omit?: movieOmit<ExtArgs> | null
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput
  }

  /**
   * movie findFirst
   */
  export type movieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movie
     */
    omit?: movieOmit<ExtArgs> | null
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * movie findFirstOrThrow
   */
  export type movieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movie
     */
    omit?: movieOmit<ExtArgs> | null
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * movie findMany
   */
  export type movieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movie
     */
    omit?: movieOmit<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: movieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movies.
     */
    cursor?: movieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * movie create
   */
  export type movieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movie
     */
    omit?: movieOmit<ExtArgs> | null
    /**
     * The data needed to create a movie.
     */
    data: XOR<movieCreateInput, movieUncheckedCreateInput>
  }

  /**
   * movie createMany
   */
  export type movieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movies.
     */
    data: movieCreateManyInput | movieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movie createManyAndReturn
   */
  export type movieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movie
     */
    omit?: movieOmit<ExtArgs> | null
    /**
     * The data used to create many movies.
     */
    data: movieCreateManyInput | movieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movie update
   */
  export type movieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movie
     */
    omit?: movieOmit<ExtArgs> | null
    /**
     * The data needed to update a movie.
     */
    data: XOR<movieUpdateInput, movieUncheckedUpdateInput>
    /**
     * Choose, which movie to update.
     */
    where: movieWhereUniqueInput
  }

  /**
   * movie updateMany
   */
  export type movieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movies.
     */
    data: XOR<movieUpdateManyMutationInput, movieUncheckedUpdateManyInput>
    /**
     * Filter which movies to update
     */
    where?: movieWhereInput
    /**
     * Limit how many movies to update.
     */
    limit?: number
  }

  /**
   * movie updateManyAndReturn
   */
  export type movieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movie
     */
    omit?: movieOmit<ExtArgs> | null
    /**
     * The data used to update movies.
     */
    data: XOR<movieUpdateManyMutationInput, movieUncheckedUpdateManyInput>
    /**
     * Filter which movies to update
     */
    where?: movieWhereInput
    /**
     * Limit how many movies to update.
     */
    limit?: number
  }

  /**
   * movie upsert
   */
  export type movieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movie
     */
    omit?: movieOmit<ExtArgs> | null
    /**
     * The filter to search for the movie to update in case it exists.
     */
    where: movieWhereUniqueInput
    /**
     * In case the movie found by the `where` argument doesn't exist, create a new movie with this data.
     */
    create: XOR<movieCreateInput, movieUncheckedCreateInput>
    /**
     * In case the movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movieUpdateInput, movieUncheckedUpdateInput>
  }

  /**
   * movie delete
   */
  export type movieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movie
     */
    omit?: movieOmit<ExtArgs> | null
    /**
     * Filter which movie to delete.
     */
    where: movieWhereUniqueInput
  }

  /**
   * movie deleteMany
   */
  export type movieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to delete
     */
    where?: movieWhereInput
    /**
     * Limit how many movies to delete.
     */
    limit?: number
  }

  /**
   * movie without action
   */
  export type movieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movie
     */
    omit?: movieOmit<ExtArgs> | null
  }


  /**
   * Model points
   */

  export type AggregatePoints = {
    _count: PointsCountAggregateOutputType | null
    _avg: PointsAvgAggregateOutputType | null
    _sum: PointsSumAggregateOutputType | null
    _min: PointsMinAggregateOutputType | null
    _max: PointsMaxAggregateOutputType | null
  }

  export type PointsAvgAggregateOutputType = {
    id: number | null
    points: number | null
  }

  export type PointsSumAggregateOutputType = {
    id: number | null
    points: number | null
  }

  export type PointsMinAggregateOutputType = {
    id: number | null
    points: number | null
  }

  export type PointsMaxAggregateOutputType = {
    id: number | null
    points: number | null
  }

  export type PointsCountAggregateOutputType = {
    id: number
    points: number
    _all: number
  }


  export type PointsAvgAggregateInputType = {
    id?: true
    points?: true
  }

  export type PointsSumAggregateInputType = {
    id?: true
    points?: true
  }

  export type PointsMinAggregateInputType = {
    id?: true
    points?: true
  }

  export type PointsMaxAggregateInputType = {
    id?: true
    points?: true
  }

  export type PointsCountAggregateInputType = {
    id?: true
    points?: true
    _all?: true
  }

  export type PointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which points to aggregate.
     */
    where?: pointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of points to fetch.
     */
    orderBy?: pointsOrderByWithRelationInput | pointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned points
    **/
    _count?: true | PointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointsMaxAggregateInputType
  }

  export type GetPointsAggregateType<T extends PointsAggregateArgs> = {
        [P in keyof T & keyof AggregatePoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoints[P]>
      : GetScalarType<T[P], AggregatePoints[P]>
  }




  export type pointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pointsWhereInput
    orderBy?: pointsOrderByWithAggregationInput | pointsOrderByWithAggregationInput[]
    by: PointsScalarFieldEnum[] | PointsScalarFieldEnum
    having?: pointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointsCountAggregateInputType | true
    _avg?: PointsAvgAggregateInputType
    _sum?: PointsSumAggregateInputType
    _min?: PointsMinAggregateInputType
    _max?: PointsMaxAggregateInputType
  }

  export type PointsGroupByOutputType = {
    id: number
    points: number
    _count: PointsCountAggregateOutputType | null
    _avg: PointsAvgAggregateOutputType | null
    _sum: PointsSumAggregateOutputType | null
    _min: PointsMinAggregateOutputType | null
    _max: PointsMaxAggregateOutputType | null
  }

  type GetPointsGroupByPayload<T extends pointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointsGroupByOutputType[P]>
            : GetScalarType<T[P], PointsGroupByOutputType[P]>
        }
      >
    >


  export type pointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    points?: boolean
  }, ExtArgs["result"]["points"]>

  export type pointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    points?: boolean
  }, ExtArgs["result"]["points"]>

  export type pointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    points?: boolean
  }, ExtArgs["result"]["points"]>

  export type pointsSelectScalar = {
    id?: boolean
    points?: boolean
  }

  export type pointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "points", ExtArgs["result"]["points"]>

  export type $pointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "points"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      points: number
    }, ExtArgs["result"]["points"]>
    composites: {}
  }

  type pointsGetPayload<S extends boolean | null | undefined | pointsDefaultArgs> = $Result.GetResult<Prisma.$pointsPayload, S>

  type pointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointsCountAggregateInputType | true
    }

  export interface pointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['points'], meta: { name: 'points' } }
    /**
     * Find zero or one Points that matches the filter.
     * @param {pointsFindUniqueArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pointsFindUniqueArgs>(args: SelectSubset<T, pointsFindUniqueArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Points that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pointsFindUniqueOrThrowArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pointsFindUniqueOrThrowArgs>(args: SelectSubset<T, pointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pointsFindFirstArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pointsFindFirstArgs>(args?: SelectSubset<T, pointsFindFirstArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Points that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pointsFindFirstOrThrowArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pointsFindFirstOrThrowArgs>(args?: SelectSubset<T, pointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.points.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.points.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointsWithIdOnly = await prisma.points.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pointsFindManyArgs>(args?: SelectSubset<T, pointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Points.
     * @param {pointsCreateArgs} args - Arguments to create a Points.
     * @example
     * // Create one Points
     * const Points = await prisma.points.create({
     *   data: {
     *     // ... data to create a Points
     *   }
     * })
     * 
     */
    create<T extends pointsCreateArgs>(args: SelectSubset<T, pointsCreateArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points.
     * @param {pointsCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const points = await prisma.points.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pointsCreateManyArgs>(args?: SelectSubset<T, pointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {pointsCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const points = await prisma.points.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `id`
     * const pointsWithIdOnly = await prisma.points.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pointsCreateManyAndReturnArgs>(args?: SelectSubset<T, pointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Points.
     * @param {pointsDeleteArgs} args - Arguments to delete one Points.
     * @example
     * // Delete one Points
     * const Points = await prisma.points.delete({
     *   where: {
     *     // ... filter to delete one Points
     *   }
     * })
     * 
     */
    delete<T extends pointsDeleteArgs>(args: SelectSubset<T, pointsDeleteArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Points.
     * @param {pointsUpdateArgs} args - Arguments to update one Points.
     * @example
     * // Update one Points
     * const points = await prisma.points.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pointsUpdateArgs>(args: SelectSubset<T, pointsUpdateArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points.
     * @param {pointsDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.points.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pointsDeleteManyArgs>(args?: SelectSubset<T, pointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const points = await prisma.points.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pointsUpdateManyArgs>(args: SelectSubset<T, pointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points and returns the data updated in the database.
     * @param {pointsUpdateManyAndReturnArgs} args - Arguments to update many Points.
     * @example
     * // Update many Points
     * const points = await prisma.points.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points and only return the `id`
     * const pointsWithIdOnly = await prisma.points.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pointsUpdateManyAndReturnArgs>(args: SelectSubset<T, pointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Points.
     * @param {pointsUpsertArgs} args - Arguments to update or create a Points.
     * @example
     * // Update or create a Points
     * const points = await prisma.points.upsert({
     *   create: {
     *     // ... data to create a Points
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Points we want to update
     *   }
     * })
     */
    upsert<T extends pointsUpsertArgs>(args: SelectSubset<T, pointsUpsertArgs<ExtArgs>>): Prisma__pointsClient<$Result.GetResult<Prisma.$pointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pointsCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.points.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends pointsCountArgs>(
      args?: Subset<T, pointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PointsAggregateArgs>(args: Subset<T, PointsAggregateArgs>): Prisma.PrismaPromise<GetPointsAggregateType<T>>

    /**
     * Group by Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pointsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pointsGroupByArgs['orderBy'] }
        : { orderBy?: pointsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the points model
   */
  readonly fields: pointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for points.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the points model
   */
  interface pointsFieldRefs {
    readonly id: FieldRef<"points", 'Int'>
    readonly points: FieldRef<"points", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * points findUnique
   */
  export type pointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Filter, which points to fetch.
     */
    where: pointsWhereUniqueInput
  }

  /**
   * points findUniqueOrThrow
   */
  export type pointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Filter, which points to fetch.
     */
    where: pointsWhereUniqueInput
  }

  /**
   * points findFirst
   */
  export type pointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Filter, which points to fetch.
     */
    where?: pointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of points to fetch.
     */
    orderBy?: pointsOrderByWithRelationInput | pointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for points.
     */
    cursor?: pointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of points.
     */
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * points findFirstOrThrow
   */
  export type pointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Filter, which points to fetch.
     */
    where?: pointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of points to fetch.
     */
    orderBy?: pointsOrderByWithRelationInput | pointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for points.
     */
    cursor?: pointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of points.
     */
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * points findMany
   */
  export type pointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Filter, which points to fetch.
     */
    where?: pointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of points to fetch.
     */
    orderBy?: pointsOrderByWithRelationInput | pointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing points.
     */
    cursor?: pointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` points.
     */
    skip?: number
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * points create
   */
  export type pointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * The data needed to create a points.
     */
    data: XOR<pointsCreateInput, pointsUncheckedCreateInput>
  }

  /**
   * points createMany
   */
  export type pointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many points.
     */
    data: pointsCreateManyInput | pointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * points createManyAndReturn
   */
  export type pointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * The data used to create many points.
     */
    data: pointsCreateManyInput | pointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * points update
   */
  export type pointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * The data needed to update a points.
     */
    data: XOR<pointsUpdateInput, pointsUncheckedUpdateInput>
    /**
     * Choose, which points to update.
     */
    where: pointsWhereUniqueInput
  }

  /**
   * points updateMany
   */
  export type pointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update points.
     */
    data: XOR<pointsUpdateManyMutationInput, pointsUncheckedUpdateManyInput>
    /**
     * Filter which points to update
     */
    where?: pointsWhereInput
    /**
     * Limit how many points to update.
     */
    limit?: number
  }

  /**
   * points updateManyAndReturn
   */
  export type pointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * The data used to update points.
     */
    data: XOR<pointsUpdateManyMutationInput, pointsUncheckedUpdateManyInput>
    /**
     * Filter which points to update
     */
    where?: pointsWhereInput
    /**
     * Limit how many points to update.
     */
    limit?: number
  }

  /**
   * points upsert
   */
  export type pointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * The filter to search for the points to update in case it exists.
     */
    where: pointsWhereUniqueInput
    /**
     * In case the points found by the `where` argument doesn't exist, create a new points with this data.
     */
    create: XOR<pointsCreateInput, pointsUncheckedCreateInput>
    /**
     * In case the points was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pointsUpdateInput, pointsUncheckedUpdateInput>
  }

  /**
   * points delete
   */
  export type pointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
    /**
     * Filter which points to delete.
     */
    where: pointsWhereUniqueInput
  }

  /**
   * points deleteMany
   */
  export type pointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which points to delete
     */
    where?: pointsWhereInput
    /**
     * Limit how many points to delete.
     */
    limit?: number
  }

  /**
   * points without action
   */
  export type pointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the points
     */
    select?: pointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the points
     */
    omit?: pointsOmit<ExtArgs> | null
  }


  /**
   * Model sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type SalesSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type SalesMinAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type SalesMaxAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type SalesCountAggregateOutputType = {
    id: number
    amount: number
    _all: number
  }


  export type SalesAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type SalesSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type SalesMinAggregateInputType = {
    id?: true
    amount?: true
  }

  export type SalesMaxAggregateInputType = {
    id?: true
    amount?: true
  }

  export type SalesCountAggregateInputType = {
    id?: true
    amount?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to aggregate.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type salesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
    orderBy?: salesOrderByWithAggregationInput | salesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: salesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _avg?: SalesAvgAggregateInputType
    _sum?: SalesSumAggregateInputType
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    id: number
    amount: number
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends salesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type salesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
  }, ExtArgs["result"]["sales"]>

  export type salesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
  }, ExtArgs["result"]["sales"]>

  export type salesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
  }, ExtArgs["result"]["sales"]>

  export type salesSelectScalar = {
    id?: boolean
    amount?: boolean
  }

  export type salesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount", ExtArgs["result"]["sales"]>

  export type $salesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sales"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type salesGetPayload<S extends boolean | null | undefined | salesDefaultArgs> = $Result.GetResult<Prisma.$salesPayload, S>

  type salesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<salesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface salesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales'], meta: { name: 'sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {salesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends salesFindUniqueArgs>(args: SelectSubset<T, salesFindUniqueArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {salesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends salesFindUniqueOrThrowArgs>(args: SelectSubset<T, salesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends salesFindFirstArgs>(args?: SelectSubset<T, salesFindFirstArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends salesFindFirstOrThrowArgs>(args?: SelectSubset<T, salesFindFirstOrThrowArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends salesFindManyArgs>(args?: SelectSubset<T, salesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {salesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends salesCreateArgs>(args: SelectSubset<T, salesCreateArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {salesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends salesCreateManyArgs>(args?: SelectSubset<T, salesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {salesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends salesCreateManyAndReturnArgs>(args?: SelectSubset<T, salesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {salesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends salesDeleteArgs>(args: SelectSubset<T, salesDeleteArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {salesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends salesUpdateArgs>(args: SelectSubset<T, salesUpdateArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {salesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends salesDeleteManyArgs>(args?: SelectSubset<T, salesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends salesUpdateManyArgs>(args: SelectSubset<T, salesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {salesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends salesUpdateManyAndReturnArgs>(args: SelectSubset<T, salesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {salesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends salesUpsertArgs>(args: SelectSubset<T, salesUpsertArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends salesCountArgs>(
      args?: Subset<T, salesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends salesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: salesGroupByArgs['orderBy'] }
        : { orderBy?: salesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, salesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sales model
   */
  readonly fields: salesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__salesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sales model
   */
  interface salesFieldRefs {
    readonly id: FieldRef<"sales", 'Int'>
    readonly amount: FieldRef<"sales", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * sales findUnique
   */
  export type salesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales findUniqueOrThrow
   */
  export type salesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales findFirst
   */
  export type salesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales findFirstOrThrow
   */
  export type salesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales findMany
   */
  export type salesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales create
   */
  export type salesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The data needed to create a sales.
     */
    data: XOR<salesCreateInput, salesUncheckedCreateInput>
  }

  /**
   * sales createMany
   */
  export type salesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sales createManyAndReturn
   */
  export type salesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sales update
   */
  export type salesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The data needed to update a sales.
     */
    data: XOR<salesUpdateInput, salesUncheckedUpdateInput>
    /**
     * Choose, which sales to update.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales updateMany
   */
  export type salesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to update.
     */
    limit?: number
  }

  /**
   * sales updateManyAndReturn
   */
  export type salesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to update.
     */
    limit?: number
  }

  /**
   * sales upsert
   */
  export type salesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The filter to search for the sales to update in case it exists.
     */
    where: salesWhereUniqueInput
    /**
     * In case the sales found by the `where` argument doesn't exist, create a new sales with this data.
     */
    create: XOR<salesCreateInput, salesUncheckedCreateInput>
    /**
     * In case the sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<salesUpdateInput, salesUncheckedUpdateInput>
  }

  /**
   * sales delete
   */
  export type salesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Filter which sales to delete.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales deleteMany
   */
  export type salesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to delete
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to delete.
     */
    limit?: number
  }

  /**
   * sales without action
   */
  export type salesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
  }


  /**
   * Model show_timing
   */

  export type AggregateShow_timing = {
    _count: Show_timingCountAggregateOutputType | null
    _avg: Show_timingAvgAggregateOutputType | null
    _sum: Show_timingSumAggregateOutputType | null
    _min: Show_timingMinAggregateOutputType | null
    _max: Show_timingMaxAggregateOutputType | null
  }

  export type Show_timingAvgAggregateOutputType = {
    id: number | null
    theater_id: number | null
    movie_id: number | null
    timing_id: number | null
  }

  export type Show_timingSumAggregateOutputType = {
    id: number | null
    theater_id: number | null
    movie_id: number | null
    timing_id: number | null
  }

  export type Show_timingMinAggregateOutputType = {
    id: number | null
    day: Date | null
    theater_id: number | null
    movie_id: number | null
    timing_id: number | null
  }

  export type Show_timingMaxAggregateOutputType = {
    id: number | null
    day: Date | null
    theater_id: number | null
    movie_id: number | null
    timing_id: number | null
  }

  export type Show_timingCountAggregateOutputType = {
    id: number
    day: number
    theater_id: number
    movie_id: number
    timing_id: number
    _all: number
  }


  export type Show_timingAvgAggregateInputType = {
    id?: true
    theater_id?: true
    movie_id?: true
    timing_id?: true
  }

  export type Show_timingSumAggregateInputType = {
    id?: true
    theater_id?: true
    movie_id?: true
    timing_id?: true
  }

  export type Show_timingMinAggregateInputType = {
    id?: true
    day?: true
    theater_id?: true
    movie_id?: true
    timing_id?: true
  }

  export type Show_timingMaxAggregateInputType = {
    id?: true
    day?: true
    theater_id?: true
    movie_id?: true
    timing_id?: true
  }

  export type Show_timingCountAggregateInputType = {
    id?: true
    day?: true
    theater_id?: true
    movie_id?: true
    timing_id?: true
    _all?: true
  }

  export type Show_timingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which show_timing to aggregate.
     */
    where?: show_timingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of show_timings to fetch.
     */
    orderBy?: show_timingOrderByWithRelationInput | show_timingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: show_timingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` show_timings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` show_timings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned show_timings
    **/
    _count?: true | Show_timingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Show_timingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Show_timingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Show_timingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Show_timingMaxAggregateInputType
  }

  export type GetShow_timingAggregateType<T extends Show_timingAggregateArgs> = {
        [P in keyof T & keyof AggregateShow_timing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShow_timing[P]>
      : GetScalarType<T[P], AggregateShow_timing[P]>
  }




  export type show_timingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: show_timingWhereInput
    orderBy?: show_timingOrderByWithAggregationInput | show_timingOrderByWithAggregationInput[]
    by: Show_timingScalarFieldEnum[] | Show_timingScalarFieldEnum
    having?: show_timingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Show_timingCountAggregateInputType | true
    _avg?: Show_timingAvgAggregateInputType
    _sum?: Show_timingSumAggregateInputType
    _min?: Show_timingMinAggregateInputType
    _max?: Show_timingMaxAggregateInputType
  }

  export type Show_timingGroupByOutputType = {
    id: number
    day: Date
    theater_id: number
    movie_id: number
    timing_id: number
    _count: Show_timingCountAggregateOutputType | null
    _avg: Show_timingAvgAggregateOutputType | null
    _sum: Show_timingSumAggregateOutputType | null
    _min: Show_timingMinAggregateOutputType | null
    _max: Show_timingMaxAggregateOutputType | null
  }

  type GetShow_timingGroupByPayload<T extends show_timingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Show_timingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Show_timingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Show_timingGroupByOutputType[P]>
            : GetScalarType<T[P], Show_timingGroupByOutputType[P]>
        }
      >
    >


  export type show_timingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    theater_id?: boolean
    movie_id?: boolean
    timing_id?: boolean
  }, ExtArgs["result"]["show_timing"]>

  export type show_timingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    theater_id?: boolean
    movie_id?: boolean
    timing_id?: boolean
  }, ExtArgs["result"]["show_timing"]>

  export type show_timingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    theater_id?: boolean
    movie_id?: boolean
    timing_id?: boolean
  }, ExtArgs["result"]["show_timing"]>

  export type show_timingSelectScalar = {
    id?: boolean
    day?: boolean
    theater_id?: boolean
    movie_id?: boolean
    timing_id?: boolean
  }

  export type show_timingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "day" | "theater_id" | "movie_id" | "timing_id", ExtArgs["result"]["show_timing"]>

  export type $show_timingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "show_timing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      day: Date
      theater_id: number
      movie_id: number
      timing_id: number
    }, ExtArgs["result"]["show_timing"]>
    composites: {}
  }

  type show_timingGetPayload<S extends boolean | null | undefined | show_timingDefaultArgs> = $Result.GetResult<Prisma.$show_timingPayload, S>

  type show_timingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<show_timingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Show_timingCountAggregateInputType | true
    }

  export interface show_timingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['show_timing'], meta: { name: 'show_timing' } }
    /**
     * Find zero or one Show_timing that matches the filter.
     * @param {show_timingFindUniqueArgs} args - Arguments to find a Show_timing
     * @example
     * // Get one Show_timing
     * const show_timing = await prisma.show_timing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends show_timingFindUniqueArgs>(args: SelectSubset<T, show_timingFindUniqueArgs<ExtArgs>>): Prisma__show_timingClient<$Result.GetResult<Prisma.$show_timingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Show_timing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {show_timingFindUniqueOrThrowArgs} args - Arguments to find a Show_timing
     * @example
     * // Get one Show_timing
     * const show_timing = await prisma.show_timing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends show_timingFindUniqueOrThrowArgs>(args: SelectSubset<T, show_timingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__show_timingClient<$Result.GetResult<Prisma.$show_timingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Show_timing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_timingFindFirstArgs} args - Arguments to find a Show_timing
     * @example
     * // Get one Show_timing
     * const show_timing = await prisma.show_timing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends show_timingFindFirstArgs>(args?: SelectSubset<T, show_timingFindFirstArgs<ExtArgs>>): Prisma__show_timingClient<$Result.GetResult<Prisma.$show_timingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Show_timing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_timingFindFirstOrThrowArgs} args - Arguments to find a Show_timing
     * @example
     * // Get one Show_timing
     * const show_timing = await prisma.show_timing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends show_timingFindFirstOrThrowArgs>(args?: SelectSubset<T, show_timingFindFirstOrThrowArgs<ExtArgs>>): Prisma__show_timingClient<$Result.GetResult<Prisma.$show_timingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Show_timings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_timingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Show_timings
     * const show_timings = await prisma.show_timing.findMany()
     * 
     * // Get first 10 Show_timings
     * const show_timings = await prisma.show_timing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const show_timingWithIdOnly = await prisma.show_timing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends show_timingFindManyArgs>(args?: SelectSubset<T, show_timingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$show_timingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Show_timing.
     * @param {show_timingCreateArgs} args - Arguments to create a Show_timing.
     * @example
     * // Create one Show_timing
     * const Show_timing = await prisma.show_timing.create({
     *   data: {
     *     // ... data to create a Show_timing
     *   }
     * })
     * 
     */
    create<T extends show_timingCreateArgs>(args: SelectSubset<T, show_timingCreateArgs<ExtArgs>>): Prisma__show_timingClient<$Result.GetResult<Prisma.$show_timingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Show_timings.
     * @param {show_timingCreateManyArgs} args - Arguments to create many Show_timings.
     * @example
     * // Create many Show_timings
     * const show_timing = await prisma.show_timing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends show_timingCreateManyArgs>(args?: SelectSubset<T, show_timingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Show_timings and returns the data saved in the database.
     * @param {show_timingCreateManyAndReturnArgs} args - Arguments to create many Show_timings.
     * @example
     * // Create many Show_timings
     * const show_timing = await prisma.show_timing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Show_timings and only return the `id`
     * const show_timingWithIdOnly = await prisma.show_timing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends show_timingCreateManyAndReturnArgs>(args?: SelectSubset<T, show_timingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$show_timingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Show_timing.
     * @param {show_timingDeleteArgs} args - Arguments to delete one Show_timing.
     * @example
     * // Delete one Show_timing
     * const Show_timing = await prisma.show_timing.delete({
     *   where: {
     *     // ... filter to delete one Show_timing
     *   }
     * })
     * 
     */
    delete<T extends show_timingDeleteArgs>(args: SelectSubset<T, show_timingDeleteArgs<ExtArgs>>): Prisma__show_timingClient<$Result.GetResult<Prisma.$show_timingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Show_timing.
     * @param {show_timingUpdateArgs} args - Arguments to update one Show_timing.
     * @example
     * // Update one Show_timing
     * const show_timing = await prisma.show_timing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends show_timingUpdateArgs>(args: SelectSubset<T, show_timingUpdateArgs<ExtArgs>>): Prisma__show_timingClient<$Result.GetResult<Prisma.$show_timingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Show_timings.
     * @param {show_timingDeleteManyArgs} args - Arguments to filter Show_timings to delete.
     * @example
     * // Delete a few Show_timings
     * const { count } = await prisma.show_timing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends show_timingDeleteManyArgs>(args?: SelectSubset<T, show_timingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Show_timings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_timingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Show_timings
     * const show_timing = await prisma.show_timing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends show_timingUpdateManyArgs>(args: SelectSubset<T, show_timingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Show_timings and returns the data updated in the database.
     * @param {show_timingUpdateManyAndReturnArgs} args - Arguments to update many Show_timings.
     * @example
     * // Update many Show_timings
     * const show_timing = await prisma.show_timing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Show_timings and only return the `id`
     * const show_timingWithIdOnly = await prisma.show_timing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends show_timingUpdateManyAndReturnArgs>(args: SelectSubset<T, show_timingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$show_timingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Show_timing.
     * @param {show_timingUpsertArgs} args - Arguments to update or create a Show_timing.
     * @example
     * // Update or create a Show_timing
     * const show_timing = await prisma.show_timing.upsert({
     *   create: {
     *     // ... data to create a Show_timing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Show_timing we want to update
     *   }
     * })
     */
    upsert<T extends show_timingUpsertArgs>(args: SelectSubset<T, show_timingUpsertArgs<ExtArgs>>): Prisma__show_timingClient<$Result.GetResult<Prisma.$show_timingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Show_timings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_timingCountArgs} args - Arguments to filter Show_timings to count.
     * @example
     * // Count the number of Show_timings
     * const count = await prisma.show_timing.count({
     *   where: {
     *     // ... the filter for the Show_timings we want to count
     *   }
     * })
    **/
    count<T extends show_timingCountArgs>(
      args?: Subset<T, show_timingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Show_timingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Show_timing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Show_timingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Show_timingAggregateArgs>(args: Subset<T, Show_timingAggregateArgs>): Prisma.PrismaPromise<GetShow_timingAggregateType<T>>

    /**
     * Group by Show_timing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_timingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends show_timingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: show_timingGroupByArgs['orderBy'] }
        : { orderBy?: show_timingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, show_timingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShow_timingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the show_timing model
   */
  readonly fields: show_timingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for show_timing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__show_timingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the show_timing model
   */
  interface show_timingFieldRefs {
    readonly id: FieldRef<"show_timing", 'Int'>
    readonly day: FieldRef<"show_timing", 'DateTime'>
    readonly theater_id: FieldRef<"show_timing", 'Int'>
    readonly movie_id: FieldRef<"show_timing", 'Int'>
    readonly timing_id: FieldRef<"show_timing", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * show_timing findUnique
   */
  export type show_timingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_timing
     */
    select?: show_timingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_timing
     */
    omit?: show_timingOmit<ExtArgs> | null
    /**
     * Filter, which show_timing to fetch.
     */
    where: show_timingWhereUniqueInput
  }

  /**
   * show_timing findUniqueOrThrow
   */
  export type show_timingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_timing
     */
    select?: show_timingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_timing
     */
    omit?: show_timingOmit<ExtArgs> | null
    /**
     * Filter, which show_timing to fetch.
     */
    where: show_timingWhereUniqueInput
  }

  /**
   * show_timing findFirst
   */
  export type show_timingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_timing
     */
    select?: show_timingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_timing
     */
    omit?: show_timingOmit<ExtArgs> | null
    /**
     * Filter, which show_timing to fetch.
     */
    where?: show_timingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of show_timings to fetch.
     */
    orderBy?: show_timingOrderByWithRelationInput | show_timingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for show_timings.
     */
    cursor?: show_timingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` show_timings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` show_timings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of show_timings.
     */
    distinct?: Show_timingScalarFieldEnum | Show_timingScalarFieldEnum[]
  }

  /**
   * show_timing findFirstOrThrow
   */
  export type show_timingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_timing
     */
    select?: show_timingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_timing
     */
    omit?: show_timingOmit<ExtArgs> | null
    /**
     * Filter, which show_timing to fetch.
     */
    where?: show_timingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of show_timings to fetch.
     */
    orderBy?: show_timingOrderByWithRelationInput | show_timingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for show_timings.
     */
    cursor?: show_timingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` show_timings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` show_timings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of show_timings.
     */
    distinct?: Show_timingScalarFieldEnum | Show_timingScalarFieldEnum[]
  }

  /**
   * show_timing findMany
   */
  export type show_timingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_timing
     */
    select?: show_timingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_timing
     */
    omit?: show_timingOmit<ExtArgs> | null
    /**
     * Filter, which show_timings to fetch.
     */
    where?: show_timingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of show_timings to fetch.
     */
    orderBy?: show_timingOrderByWithRelationInput | show_timingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing show_timings.
     */
    cursor?: show_timingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` show_timings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` show_timings.
     */
    skip?: number
    distinct?: Show_timingScalarFieldEnum | Show_timingScalarFieldEnum[]
  }

  /**
   * show_timing create
   */
  export type show_timingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_timing
     */
    select?: show_timingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_timing
     */
    omit?: show_timingOmit<ExtArgs> | null
    /**
     * The data needed to create a show_timing.
     */
    data: XOR<show_timingCreateInput, show_timingUncheckedCreateInput>
  }

  /**
   * show_timing createMany
   */
  export type show_timingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many show_timings.
     */
    data: show_timingCreateManyInput | show_timingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * show_timing createManyAndReturn
   */
  export type show_timingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_timing
     */
    select?: show_timingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the show_timing
     */
    omit?: show_timingOmit<ExtArgs> | null
    /**
     * The data used to create many show_timings.
     */
    data: show_timingCreateManyInput | show_timingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * show_timing update
   */
  export type show_timingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_timing
     */
    select?: show_timingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_timing
     */
    omit?: show_timingOmit<ExtArgs> | null
    /**
     * The data needed to update a show_timing.
     */
    data: XOR<show_timingUpdateInput, show_timingUncheckedUpdateInput>
    /**
     * Choose, which show_timing to update.
     */
    where: show_timingWhereUniqueInput
  }

  /**
   * show_timing updateMany
   */
  export type show_timingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update show_timings.
     */
    data: XOR<show_timingUpdateManyMutationInput, show_timingUncheckedUpdateManyInput>
    /**
     * Filter which show_timings to update
     */
    where?: show_timingWhereInput
    /**
     * Limit how many show_timings to update.
     */
    limit?: number
  }

  /**
   * show_timing updateManyAndReturn
   */
  export type show_timingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_timing
     */
    select?: show_timingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the show_timing
     */
    omit?: show_timingOmit<ExtArgs> | null
    /**
     * The data used to update show_timings.
     */
    data: XOR<show_timingUpdateManyMutationInput, show_timingUncheckedUpdateManyInput>
    /**
     * Filter which show_timings to update
     */
    where?: show_timingWhereInput
    /**
     * Limit how many show_timings to update.
     */
    limit?: number
  }

  /**
   * show_timing upsert
   */
  export type show_timingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_timing
     */
    select?: show_timingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_timing
     */
    omit?: show_timingOmit<ExtArgs> | null
    /**
     * The filter to search for the show_timing to update in case it exists.
     */
    where: show_timingWhereUniqueInput
    /**
     * In case the show_timing found by the `where` argument doesn't exist, create a new show_timing with this data.
     */
    create: XOR<show_timingCreateInput, show_timingUncheckedCreateInput>
    /**
     * In case the show_timing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<show_timingUpdateInput, show_timingUncheckedUpdateInput>
  }

  /**
   * show_timing delete
   */
  export type show_timingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_timing
     */
    select?: show_timingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_timing
     */
    omit?: show_timingOmit<ExtArgs> | null
    /**
     * Filter which show_timing to delete.
     */
    where: show_timingWhereUniqueInput
  }

  /**
   * show_timing deleteMany
   */
  export type show_timingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which show_timings to delete
     */
    where?: show_timingWhereInput
    /**
     * Limit how many show_timings to delete.
     */
    limit?: number
  }

  /**
   * show_timing without action
   */
  export type show_timingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_timing
     */
    select?: show_timingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_timing
     */
    omit?: show_timingOmit<ExtArgs> | null
  }


  /**
   * Model theater
   */

  export type AggregateTheater = {
    _count: TheaterCountAggregateOutputType | null
    _avg: TheaterAvgAggregateOutputType | null
    _sum: TheaterSumAggregateOutputType | null
    _min: TheaterMinAggregateOutputType | null
    _max: TheaterMaxAggregateOutputType | null
  }

  export type TheaterAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type TheaterSumAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type TheaterMinAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
  }

  export type TheaterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
  }

  export type TheaterCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    _all: number
  }


  export type TheaterAvgAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type TheaterSumAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type TheaterMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
  }

  export type TheaterMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
  }

  export type TheaterCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    _all?: true
  }

  export type TheaterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which theater to aggregate.
     */
    where?: theaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of theaters to fetch.
     */
    orderBy?: theaterOrderByWithRelationInput | theaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: theaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` theaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` theaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned theaters
    **/
    _count?: true | TheaterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TheaterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TheaterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TheaterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TheaterMaxAggregateInputType
  }

  export type GetTheaterAggregateType<T extends TheaterAggregateArgs> = {
        [P in keyof T & keyof AggregateTheater]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheater[P]>
      : GetScalarType<T[P], AggregateTheater[P]>
  }




  export type theaterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: theaterWhereInput
    orderBy?: theaterOrderByWithAggregationInput | theaterOrderByWithAggregationInput[]
    by: TheaterScalarFieldEnum[] | TheaterScalarFieldEnum
    having?: theaterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TheaterCountAggregateInputType | true
    _avg?: TheaterAvgAggregateInputType
    _sum?: TheaterSumAggregateInputType
    _min?: TheaterMinAggregateInputType
    _max?: TheaterMaxAggregateInputType
  }

  export type TheaterGroupByOutputType = {
    id: number
    name: string
    capacity: number
    _count: TheaterCountAggregateOutputType | null
    _avg: TheaterAvgAggregateOutputType | null
    _sum: TheaterSumAggregateOutputType | null
    _min: TheaterMinAggregateOutputType | null
    _max: TheaterMaxAggregateOutputType | null
  }

  type GetTheaterGroupByPayload<T extends theaterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TheaterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TheaterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TheaterGroupByOutputType[P]>
            : GetScalarType<T[P], TheaterGroupByOutputType[P]>
        }
      >
    >


  export type theaterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
  }, ExtArgs["result"]["theater"]>

  export type theaterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
  }, ExtArgs["result"]["theater"]>

  export type theaterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
  }, ExtArgs["result"]["theater"]>

  export type theaterSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
  }

  export type theaterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "capacity", ExtArgs["result"]["theater"]>

  export type $theaterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "theater"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      capacity: number
    }, ExtArgs["result"]["theater"]>
    composites: {}
  }

  type theaterGetPayload<S extends boolean | null | undefined | theaterDefaultArgs> = $Result.GetResult<Prisma.$theaterPayload, S>

  type theaterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<theaterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TheaterCountAggregateInputType | true
    }

  export interface theaterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['theater'], meta: { name: 'theater' } }
    /**
     * Find zero or one Theater that matches the filter.
     * @param {theaterFindUniqueArgs} args - Arguments to find a Theater
     * @example
     * // Get one Theater
     * const theater = await prisma.theater.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends theaterFindUniqueArgs>(args: SelectSubset<T, theaterFindUniqueArgs<ExtArgs>>): Prisma__theaterClient<$Result.GetResult<Prisma.$theaterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theater that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {theaterFindUniqueOrThrowArgs} args - Arguments to find a Theater
     * @example
     * // Get one Theater
     * const theater = await prisma.theater.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends theaterFindUniqueOrThrowArgs>(args: SelectSubset<T, theaterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__theaterClient<$Result.GetResult<Prisma.$theaterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theater that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {theaterFindFirstArgs} args - Arguments to find a Theater
     * @example
     * // Get one Theater
     * const theater = await prisma.theater.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends theaterFindFirstArgs>(args?: SelectSubset<T, theaterFindFirstArgs<ExtArgs>>): Prisma__theaterClient<$Result.GetResult<Prisma.$theaterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theater that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {theaterFindFirstOrThrowArgs} args - Arguments to find a Theater
     * @example
     * // Get one Theater
     * const theater = await prisma.theater.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends theaterFindFirstOrThrowArgs>(args?: SelectSubset<T, theaterFindFirstOrThrowArgs<ExtArgs>>): Prisma__theaterClient<$Result.GetResult<Prisma.$theaterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Theaters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {theaterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Theaters
     * const theaters = await prisma.theater.findMany()
     * 
     * // Get first 10 Theaters
     * const theaters = await prisma.theater.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const theaterWithIdOnly = await prisma.theater.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends theaterFindManyArgs>(args?: SelectSubset<T, theaterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$theaterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theater.
     * @param {theaterCreateArgs} args - Arguments to create a Theater.
     * @example
     * // Create one Theater
     * const Theater = await prisma.theater.create({
     *   data: {
     *     // ... data to create a Theater
     *   }
     * })
     * 
     */
    create<T extends theaterCreateArgs>(args: SelectSubset<T, theaterCreateArgs<ExtArgs>>): Prisma__theaterClient<$Result.GetResult<Prisma.$theaterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Theaters.
     * @param {theaterCreateManyArgs} args - Arguments to create many Theaters.
     * @example
     * // Create many Theaters
     * const theater = await prisma.theater.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends theaterCreateManyArgs>(args?: SelectSubset<T, theaterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Theaters and returns the data saved in the database.
     * @param {theaterCreateManyAndReturnArgs} args - Arguments to create many Theaters.
     * @example
     * // Create many Theaters
     * const theater = await prisma.theater.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Theaters and only return the `id`
     * const theaterWithIdOnly = await prisma.theater.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends theaterCreateManyAndReturnArgs>(args?: SelectSubset<T, theaterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$theaterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Theater.
     * @param {theaterDeleteArgs} args - Arguments to delete one Theater.
     * @example
     * // Delete one Theater
     * const Theater = await prisma.theater.delete({
     *   where: {
     *     // ... filter to delete one Theater
     *   }
     * })
     * 
     */
    delete<T extends theaterDeleteArgs>(args: SelectSubset<T, theaterDeleteArgs<ExtArgs>>): Prisma__theaterClient<$Result.GetResult<Prisma.$theaterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theater.
     * @param {theaterUpdateArgs} args - Arguments to update one Theater.
     * @example
     * // Update one Theater
     * const theater = await prisma.theater.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends theaterUpdateArgs>(args: SelectSubset<T, theaterUpdateArgs<ExtArgs>>): Prisma__theaterClient<$Result.GetResult<Prisma.$theaterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Theaters.
     * @param {theaterDeleteManyArgs} args - Arguments to filter Theaters to delete.
     * @example
     * // Delete a few Theaters
     * const { count } = await prisma.theater.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends theaterDeleteManyArgs>(args?: SelectSubset<T, theaterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Theaters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {theaterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Theaters
     * const theater = await prisma.theater.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends theaterUpdateManyArgs>(args: SelectSubset<T, theaterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Theaters and returns the data updated in the database.
     * @param {theaterUpdateManyAndReturnArgs} args - Arguments to update many Theaters.
     * @example
     * // Update many Theaters
     * const theater = await prisma.theater.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Theaters and only return the `id`
     * const theaterWithIdOnly = await prisma.theater.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends theaterUpdateManyAndReturnArgs>(args: SelectSubset<T, theaterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$theaterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Theater.
     * @param {theaterUpsertArgs} args - Arguments to update or create a Theater.
     * @example
     * // Update or create a Theater
     * const theater = await prisma.theater.upsert({
     *   create: {
     *     // ... data to create a Theater
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theater we want to update
     *   }
     * })
     */
    upsert<T extends theaterUpsertArgs>(args: SelectSubset<T, theaterUpsertArgs<ExtArgs>>): Prisma__theaterClient<$Result.GetResult<Prisma.$theaterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Theaters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {theaterCountArgs} args - Arguments to filter Theaters to count.
     * @example
     * // Count the number of Theaters
     * const count = await prisma.theater.count({
     *   where: {
     *     // ... the filter for the Theaters we want to count
     *   }
     * })
    **/
    count<T extends theaterCountArgs>(
      args?: Subset<T, theaterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TheaterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theater.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheaterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TheaterAggregateArgs>(args: Subset<T, TheaterAggregateArgs>): Prisma.PrismaPromise<GetTheaterAggregateType<T>>

    /**
     * Group by Theater.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {theaterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends theaterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: theaterGroupByArgs['orderBy'] }
        : { orderBy?: theaterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, theaterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTheaterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the theater model
   */
  readonly fields: theaterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for theater.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__theaterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the theater model
   */
  interface theaterFieldRefs {
    readonly id: FieldRef<"theater", 'Int'>
    readonly name: FieldRef<"theater", 'String'>
    readonly capacity: FieldRef<"theater", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * theater findUnique
   */
  export type theaterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theater
     */
    select?: theaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theater
     */
    omit?: theaterOmit<ExtArgs> | null
    /**
     * Filter, which theater to fetch.
     */
    where: theaterWhereUniqueInput
  }

  /**
   * theater findUniqueOrThrow
   */
  export type theaterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theater
     */
    select?: theaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theater
     */
    omit?: theaterOmit<ExtArgs> | null
    /**
     * Filter, which theater to fetch.
     */
    where: theaterWhereUniqueInput
  }

  /**
   * theater findFirst
   */
  export type theaterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theater
     */
    select?: theaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theater
     */
    omit?: theaterOmit<ExtArgs> | null
    /**
     * Filter, which theater to fetch.
     */
    where?: theaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of theaters to fetch.
     */
    orderBy?: theaterOrderByWithRelationInput | theaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for theaters.
     */
    cursor?: theaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` theaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` theaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of theaters.
     */
    distinct?: TheaterScalarFieldEnum | TheaterScalarFieldEnum[]
  }

  /**
   * theater findFirstOrThrow
   */
  export type theaterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theater
     */
    select?: theaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theater
     */
    omit?: theaterOmit<ExtArgs> | null
    /**
     * Filter, which theater to fetch.
     */
    where?: theaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of theaters to fetch.
     */
    orderBy?: theaterOrderByWithRelationInput | theaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for theaters.
     */
    cursor?: theaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` theaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` theaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of theaters.
     */
    distinct?: TheaterScalarFieldEnum | TheaterScalarFieldEnum[]
  }

  /**
   * theater findMany
   */
  export type theaterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theater
     */
    select?: theaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theater
     */
    omit?: theaterOmit<ExtArgs> | null
    /**
     * Filter, which theaters to fetch.
     */
    where?: theaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of theaters to fetch.
     */
    orderBy?: theaterOrderByWithRelationInput | theaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing theaters.
     */
    cursor?: theaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` theaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` theaters.
     */
    skip?: number
    distinct?: TheaterScalarFieldEnum | TheaterScalarFieldEnum[]
  }

  /**
   * theater create
   */
  export type theaterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theater
     */
    select?: theaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theater
     */
    omit?: theaterOmit<ExtArgs> | null
    /**
     * The data needed to create a theater.
     */
    data: XOR<theaterCreateInput, theaterUncheckedCreateInput>
  }

  /**
   * theater createMany
   */
  export type theaterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many theaters.
     */
    data: theaterCreateManyInput | theaterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * theater createManyAndReturn
   */
  export type theaterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theater
     */
    select?: theaterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the theater
     */
    omit?: theaterOmit<ExtArgs> | null
    /**
     * The data used to create many theaters.
     */
    data: theaterCreateManyInput | theaterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * theater update
   */
  export type theaterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theater
     */
    select?: theaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theater
     */
    omit?: theaterOmit<ExtArgs> | null
    /**
     * The data needed to update a theater.
     */
    data: XOR<theaterUpdateInput, theaterUncheckedUpdateInput>
    /**
     * Choose, which theater to update.
     */
    where: theaterWhereUniqueInput
  }

  /**
   * theater updateMany
   */
  export type theaterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update theaters.
     */
    data: XOR<theaterUpdateManyMutationInput, theaterUncheckedUpdateManyInput>
    /**
     * Filter which theaters to update
     */
    where?: theaterWhereInput
    /**
     * Limit how many theaters to update.
     */
    limit?: number
  }

  /**
   * theater updateManyAndReturn
   */
  export type theaterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theater
     */
    select?: theaterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the theater
     */
    omit?: theaterOmit<ExtArgs> | null
    /**
     * The data used to update theaters.
     */
    data: XOR<theaterUpdateManyMutationInput, theaterUncheckedUpdateManyInput>
    /**
     * Filter which theaters to update
     */
    where?: theaterWhereInput
    /**
     * Limit how many theaters to update.
     */
    limit?: number
  }

  /**
   * theater upsert
   */
  export type theaterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theater
     */
    select?: theaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theater
     */
    omit?: theaterOmit<ExtArgs> | null
    /**
     * The filter to search for the theater to update in case it exists.
     */
    where: theaterWhereUniqueInput
    /**
     * In case the theater found by the `where` argument doesn't exist, create a new theater with this data.
     */
    create: XOR<theaterCreateInput, theaterUncheckedCreateInput>
    /**
     * In case the theater was found with the provided `where` argument, update it with this data.
     */
    update: XOR<theaterUpdateInput, theaterUncheckedUpdateInput>
  }

  /**
   * theater delete
   */
  export type theaterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theater
     */
    select?: theaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theater
     */
    omit?: theaterOmit<ExtArgs> | null
    /**
     * Filter which theater to delete.
     */
    where: theaterWhereUniqueInput
  }

  /**
   * theater deleteMany
   */
  export type theaterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which theaters to delete
     */
    where?: theaterWhereInput
    /**
     * Limit how many theaters to delete.
     */
    limit?: number
  }

  /**
   * theater without action
   */
  export type theaterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theater
     */
    select?: theaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theater
     */
    omit?: theaterOmit<ExtArgs> | null
  }


  /**
   * Model timeslot
   */

  export type AggregateTimeslot = {
    _count: TimeslotCountAggregateOutputType | null
    _avg: TimeslotAvgAggregateOutputType | null
    _sum: TimeslotSumAggregateOutputType | null
    _min: TimeslotMinAggregateOutputType | null
    _max: TimeslotMaxAggregateOutputType | null
  }

  export type TimeslotAvgAggregateOutputType = {
    id: number | null
  }

  export type TimeslotSumAggregateOutputType = {
    id: number | null
  }

  export type TimeslotMinAggregateOutputType = {
    id: number | null
    start_time: string | null
    end_time: string | null
  }

  export type TimeslotMaxAggregateOutputType = {
    id: number | null
    start_time: string | null
    end_time: string | null
  }

  export type TimeslotCountAggregateOutputType = {
    id: number
    start_time: number
    end_time: number
    _all: number
  }


  export type TimeslotAvgAggregateInputType = {
    id?: true
  }

  export type TimeslotSumAggregateInputType = {
    id?: true
  }

  export type TimeslotMinAggregateInputType = {
    id?: true
    start_time?: true
    end_time?: true
  }

  export type TimeslotMaxAggregateInputType = {
    id?: true
    start_time?: true
    end_time?: true
  }

  export type TimeslotCountAggregateInputType = {
    id?: true
    start_time?: true
    end_time?: true
    _all?: true
  }

  export type TimeslotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timeslot to aggregate.
     */
    where?: timeslotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timeslots to fetch.
     */
    orderBy?: timeslotOrderByWithRelationInput | timeslotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: timeslotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timeslots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timeslots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned timeslots
    **/
    _count?: true | TimeslotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeslotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeslotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeslotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeslotMaxAggregateInputType
  }

  export type GetTimeslotAggregateType<T extends TimeslotAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeslot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeslot[P]>
      : GetScalarType<T[P], AggregateTimeslot[P]>
  }




  export type timeslotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: timeslotWhereInput
    orderBy?: timeslotOrderByWithAggregationInput | timeslotOrderByWithAggregationInput[]
    by: TimeslotScalarFieldEnum[] | TimeslotScalarFieldEnum
    having?: timeslotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeslotCountAggregateInputType | true
    _avg?: TimeslotAvgAggregateInputType
    _sum?: TimeslotSumAggregateInputType
    _min?: TimeslotMinAggregateInputType
    _max?: TimeslotMaxAggregateInputType
  }

  export type TimeslotGroupByOutputType = {
    id: number
    start_time: string
    end_time: string
    _count: TimeslotCountAggregateOutputType | null
    _avg: TimeslotAvgAggregateOutputType | null
    _sum: TimeslotSumAggregateOutputType | null
    _min: TimeslotMinAggregateOutputType | null
    _max: TimeslotMaxAggregateOutputType | null
  }

  type GetTimeslotGroupByPayload<T extends timeslotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeslotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeslotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeslotGroupByOutputType[P]>
            : GetScalarType<T[P], TimeslotGroupByOutputType[P]>
        }
      >
    >


  export type timeslotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_time?: boolean
    end_time?: boolean
  }, ExtArgs["result"]["timeslot"]>

  export type timeslotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_time?: boolean
    end_time?: boolean
  }, ExtArgs["result"]["timeslot"]>

  export type timeslotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_time?: boolean
    end_time?: boolean
  }, ExtArgs["result"]["timeslot"]>

  export type timeslotSelectScalar = {
    id?: boolean
    start_time?: boolean
    end_time?: boolean
  }

  export type timeslotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "start_time" | "end_time", ExtArgs["result"]["timeslot"]>

  export type $timeslotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "timeslot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start_time: string
      end_time: string
    }, ExtArgs["result"]["timeslot"]>
    composites: {}
  }

  type timeslotGetPayload<S extends boolean | null | undefined | timeslotDefaultArgs> = $Result.GetResult<Prisma.$timeslotPayload, S>

  type timeslotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<timeslotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeslotCountAggregateInputType | true
    }

  export interface timeslotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['timeslot'], meta: { name: 'timeslot' } }
    /**
     * Find zero or one Timeslot that matches the filter.
     * @param {timeslotFindUniqueArgs} args - Arguments to find a Timeslot
     * @example
     * // Get one Timeslot
     * const timeslot = await prisma.timeslot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends timeslotFindUniqueArgs>(args: SelectSubset<T, timeslotFindUniqueArgs<ExtArgs>>): Prisma__timeslotClient<$Result.GetResult<Prisma.$timeslotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Timeslot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {timeslotFindUniqueOrThrowArgs} args - Arguments to find a Timeslot
     * @example
     * // Get one Timeslot
     * const timeslot = await prisma.timeslot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends timeslotFindUniqueOrThrowArgs>(args: SelectSubset<T, timeslotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__timeslotClient<$Result.GetResult<Prisma.$timeslotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timeslot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timeslotFindFirstArgs} args - Arguments to find a Timeslot
     * @example
     * // Get one Timeslot
     * const timeslot = await prisma.timeslot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends timeslotFindFirstArgs>(args?: SelectSubset<T, timeslotFindFirstArgs<ExtArgs>>): Prisma__timeslotClient<$Result.GetResult<Prisma.$timeslotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timeslot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timeslotFindFirstOrThrowArgs} args - Arguments to find a Timeslot
     * @example
     * // Get one Timeslot
     * const timeslot = await prisma.timeslot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends timeslotFindFirstOrThrowArgs>(args?: SelectSubset<T, timeslotFindFirstOrThrowArgs<ExtArgs>>): Prisma__timeslotClient<$Result.GetResult<Prisma.$timeslotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Timeslots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timeslotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timeslots
     * const timeslots = await prisma.timeslot.findMany()
     * 
     * // Get first 10 Timeslots
     * const timeslots = await prisma.timeslot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeslotWithIdOnly = await prisma.timeslot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends timeslotFindManyArgs>(args?: SelectSubset<T, timeslotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timeslotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Timeslot.
     * @param {timeslotCreateArgs} args - Arguments to create a Timeslot.
     * @example
     * // Create one Timeslot
     * const Timeslot = await prisma.timeslot.create({
     *   data: {
     *     // ... data to create a Timeslot
     *   }
     * })
     * 
     */
    create<T extends timeslotCreateArgs>(args: SelectSubset<T, timeslotCreateArgs<ExtArgs>>): Prisma__timeslotClient<$Result.GetResult<Prisma.$timeslotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Timeslots.
     * @param {timeslotCreateManyArgs} args - Arguments to create many Timeslots.
     * @example
     * // Create many Timeslots
     * const timeslot = await prisma.timeslot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends timeslotCreateManyArgs>(args?: SelectSubset<T, timeslotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timeslots and returns the data saved in the database.
     * @param {timeslotCreateManyAndReturnArgs} args - Arguments to create many Timeslots.
     * @example
     * // Create many Timeslots
     * const timeslot = await prisma.timeslot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timeslots and only return the `id`
     * const timeslotWithIdOnly = await prisma.timeslot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends timeslotCreateManyAndReturnArgs>(args?: SelectSubset<T, timeslotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timeslotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Timeslot.
     * @param {timeslotDeleteArgs} args - Arguments to delete one Timeslot.
     * @example
     * // Delete one Timeslot
     * const Timeslot = await prisma.timeslot.delete({
     *   where: {
     *     // ... filter to delete one Timeslot
     *   }
     * })
     * 
     */
    delete<T extends timeslotDeleteArgs>(args: SelectSubset<T, timeslotDeleteArgs<ExtArgs>>): Prisma__timeslotClient<$Result.GetResult<Prisma.$timeslotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Timeslot.
     * @param {timeslotUpdateArgs} args - Arguments to update one Timeslot.
     * @example
     * // Update one Timeslot
     * const timeslot = await prisma.timeslot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends timeslotUpdateArgs>(args: SelectSubset<T, timeslotUpdateArgs<ExtArgs>>): Prisma__timeslotClient<$Result.GetResult<Prisma.$timeslotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Timeslots.
     * @param {timeslotDeleteManyArgs} args - Arguments to filter Timeslots to delete.
     * @example
     * // Delete a few Timeslots
     * const { count } = await prisma.timeslot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends timeslotDeleteManyArgs>(args?: SelectSubset<T, timeslotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timeslots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timeslotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timeslots
     * const timeslot = await prisma.timeslot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends timeslotUpdateManyArgs>(args: SelectSubset<T, timeslotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timeslots and returns the data updated in the database.
     * @param {timeslotUpdateManyAndReturnArgs} args - Arguments to update many Timeslots.
     * @example
     * // Update many Timeslots
     * const timeslot = await prisma.timeslot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Timeslots and only return the `id`
     * const timeslotWithIdOnly = await prisma.timeslot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends timeslotUpdateManyAndReturnArgs>(args: SelectSubset<T, timeslotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timeslotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Timeslot.
     * @param {timeslotUpsertArgs} args - Arguments to update or create a Timeslot.
     * @example
     * // Update or create a Timeslot
     * const timeslot = await prisma.timeslot.upsert({
     *   create: {
     *     // ... data to create a Timeslot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timeslot we want to update
     *   }
     * })
     */
    upsert<T extends timeslotUpsertArgs>(args: SelectSubset<T, timeslotUpsertArgs<ExtArgs>>): Prisma__timeslotClient<$Result.GetResult<Prisma.$timeslotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Timeslots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timeslotCountArgs} args - Arguments to filter Timeslots to count.
     * @example
     * // Count the number of Timeslots
     * const count = await prisma.timeslot.count({
     *   where: {
     *     // ... the filter for the Timeslots we want to count
     *   }
     * })
    **/
    count<T extends timeslotCountArgs>(
      args?: Subset<T, timeslotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeslotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timeslot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeslotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeslotAggregateArgs>(args: Subset<T, TimeslotAggregateArgs>): Prisma.PrismaPromise<GetTimeslotAggregateType<T>>

    /**
     * Group by Timeslot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timeslotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends timeslotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: timeslotGroupByArgs['orderBy'] }
        : { orderBy?: timeslotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, timeslotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeslotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the timeslot model
   */
  readonly fields: timeslotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for timeslot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__timeslotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the timeslot model
   */
  interface timeslotFieldRefs {
    readonly id: FieldRef<"timeslot", 'Int'>
    readonly start_time: FieldRef<"timeslot", 'String'>
    readonly end_time: FieldRef<"timeslot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * timeslot findUnique
   */
  export type timeslotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timeslot
     */
    omit?: timeslotOmit<ExtArgs> | null
    /**
     * Filter, which timeslot to fetch.
     */
    where: timeslotWhereUniqueInput
  }

  /**
   * timeslot findUniqueOrThrow
   */
  export type timeslotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timeslot
     */
    omit?: timeslotOmit<ExtArgs> | null
    /**
     * Filter, which timeslot to fetch.
     */
    where: timeslotWhereUniqueInput
  }

  /**
   * timeslot findFirst
   */
  export type timeslotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timeslot
     */
    omit?: timeslotOmit<ExtArgs> | null
    /**
     * Filter, which timeslot to fetch.
     */
    where?: timeslotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timeslots to fetch.
     */
    orderBy?: timeslotOrderByWithRelationInput | timeslotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timeslots.
     */
    cursor?: timeslotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timeslots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timeslots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timeslots.
     */
    distinct?: TimeslotScalarFieldEnum | TimeslotScalarFieldEnum[]
  }

  /**
   * timeslot findFirstOrThrow
   */
  export type timeslotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timeslot
     */
    omit?: timeslotOmit<ExtArgs> | null
    /**
     * Filter, which timeslot to fetch.
     */
    where?: timeslotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timeslots to fetch.
     */
    orderBy?: timeslotOrderByWithRelationInput | timeslotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timeslots.
     */
    cursor?: timeslotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timeslots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timeslots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timeslots.
     */
    distinct?: TimeslotScalarFieldEnum | TimeslotScalarFieldEnum[]
  }

  /**
   * timeslot findMany
   */
  export type timeslotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timeslot
     */
    omit?: timeslotOmit<ExtArgs> | null
    /**
     * Filter, which timeslots to fetch.
     */
    where?: timeslotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timeslots to fetch.
     */
    orderBy?: timeslotOrderByWithRelationInput | timeslotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing timeslots.
     */
    cursor?: timeslotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timeslots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timeslots.
     */
    skip?: number
    distinct?: TimeslotScalarFieldEnum | TimeslotScalarFieldEnum[]
  }

  /**
   * timeslot create
   */
  export type timeslotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timeslot
     */
    omit?: timeslotOmit<ExtArgs> | null
    /**
     * The data needed to create a timeslot.
     */
    data: XOR<timeslotCreateInput, timeslotUncheckedCreateInput>
  }

  /**
   * timeslot createMany
   */
  export type timeslotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many timeslots.
     */
    data: timeslotCreateManyInput | timeslotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * timeslot createManyAndReturn
   */
  export type timeslotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the timeslot
     */
    omit?: timeslotOmit<ExtArgs> | null
    /**
     * The data used to create many timeslots.
     */
    data: timeslotCreateManyInput | timeslotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * timeslot update
   */
  export type timeslotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timeslot
     */
    omit?: timeslotOmit<ExtArgs> | null
    /**
     * The data needed to update a timeslot.
     */
    data: XOR<timeslotUpdateInput, timeslotUncheckedUpdateInput>
    /**
     * Choose, which timeslot to update.
     */
    where: timeslotWhereUniqueInput
  }

  /**
   * timeslot updateMany
   */
  export type timeslotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update timeslots.
     */
    data: XOR<timeslotUpdateManyMutationInput, timeslotUncheckedUpdateManyInput>
    /**
     * Filter which timeslots to update
     */
    where?: timeslotWhereInput
    /**
     * Limit how many timeslots to update.
     */
    limit?: number
  }

  /**
   * timeslot updateManyAndReturn
   */
  export type timeslotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the timeslot
     */
    omit?: timeslotOmit<ExtArgs> | null
    /**
     * The data used to update timeslots.
     */
    data: XOR<timeslotUpdateManyMutationInput, timeslotUncheckedUpdateManyInput>
    /**
     * Filter which timeslots to update
     */
    where?: timeslotWhereInput
    /**
     * Limit how many timeslots to update.
     */
    limit?: number
  }

  /**
   * timeslot upsert
   */
  export type timeslotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timeslot
     */
    omit?: timeslotOmit<ExtArgs> | null
    /**
     * The filter to search for the timeslot to update in case it exists.
     */
    where: timeslotWhereUniqueInput
    /**
     * In case the timeslot found by the `where` argument doesn't exist, create a new timeslot with this data.
     */
    create: XOR<timeslotCreateInput, timeslotUncheckedCreateInput>
    /**
     * In case the timeslot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<timeslotUpdateInput, timeslotUncheckedUpdateInput>
  }

  /**
   * timeslot delete
   */
  export type timeslotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timeslot
     */
    omit?: timeslotOmit<ExtArgs> | null
    /**
     * Filter which timeslot to delete.
     */
    where: timeslotWhereUniqueInput
  }

  /**
   * timeslot deleteMany
   */
  export type timeslotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timeslots to delete
     */
    where?: timeslotWhereInput
    /**
     * Limit how many timeslots to delete.
     */
    limit?: number
  }

  /**
   * timeslot without action
   */
  export type timeslotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timeslot
     */
    select?: timeslotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timeslot
     */
    omit?: timeslotOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MovieScalarFieldEnum: {
    id: 'id',
    name: 'name',
    actors: 'actors'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const PointsScalarFieldEnum: {
    id: 'id',
    points: 'points'
  };

  export type PointsScalarFieldEnum = (typeof PointsScalarFieldEnum)[keyof typeof PointsScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    id: 'id',
    amount: 'amount'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const Show_timingScalarFieldEnum: {
    id: 'id',
    day: 'day',
    theater_id: 'theater_id',
    movie_id: 'movie_id',
    timing_id: 'timing_id'
  };

  export type Show_timingScalarFieldEnum = (typeof Show_timingScalarFieldEnum)[keyof typeof Show_timingScalarFieldEnum]


  export const TheaterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity'
  };

  export type TheaterScalarFieldEnum = (typeof TheaterScalarFieldEnum)[keyof typeof TheaterScalarFieldEnum]


  export const TimeslotScalarFieldEnum: {
    id: 'id',
    start_time: 'start_time',
    end_time: 'end_time'
  };

  export type TimeslotScalarFieldEnum = (typeof TimeslotScalarFieldEnum)[keyof typeof TimeslotScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
  /**
   * Deep Input Types
   */


  export type movieWhereInput = {
    AND?: movieWhereInput | movieWhereInput[]
    OR?: movieWhereInput[]
    NOT?: movieWhereInput | movieWhereInput[]
    id?: IntFilter<"movie"> | number
    name?: StringFilter<"movie"> | string
    actors?: StringFilter<"movie"> | string
  }

  export type movieOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    actors?: SortOrder
  }

  export type movieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: movieWhereInput | movieWhereInput[]
    OR?: movieWhereInput[]
    NOT?: movieWhereInput | movieWhereInput[]
    name?: StringFilter<"movie"> | string
    actors?: StringFilter<"movie"> | string
  }, "id">

  export type movieOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    actors?: SortOrder
    _count?: movieCountOrderByAggregateInput
    _avg?: movieAvgOrderByAggregateInput
    _max?: movieMaxOrderByAggregateInput
    _min?: movieMinOrderByAggregateInput
    _sum?: movieSumOrderByAggregateInput
  }

  export type movieScalarWhereWithAggregatesInput = {
    AND?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[]
    OR?: movieScalarWhereWithAggregatesInput[]
    NOT?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"movie"> | number
    name?: StringWithAggregatesFilter<"movie"> | string
    actors?: StringWithAggregatesFilter<"movie"> | string
  }

  export type pointsWhereInput = {
    AND?: pointsWhereInput | pointsWhereInput[]
    OR?: pointsWhereInput[]
    NOT?: pointsWhereInput | pointsWhereInput[]
    id?: IntFilter<"points"> | number
    points?: IntFilter<"points"> | number
  }

  export type pointsOrderByWithRelationInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type pointsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pointsWhereInput | pointsWhereInput[]
    OR?: pointsWhereInput[]
    NOT?: pointsWhereInput | pointsWhereInput[]
    points?: IntFilter<"points"> | number
  }, "id">

  export type pointsOrderByWithAggregationInput = {
    id?: SortOrder
    points?: SortOrder
    _count?: pointsCountOrderByAggregateInput
    _avg?: pointsAvgOrderByAggregateInput
    _max?: pointsMaxOrderByAggregateInput
    _min?: pointsMinOrderByAggregateInput
    _sum?: pointsSumOrderByAggregateInput
  }

  export type pointsScalarWhereWithAggregatesInput = {
    AND?: pointsScalarWhereWithAggregatesInput | pointsScalarWhereWithAggregatesInput[]
    OR?: pointsScalarWhereWithAggregatesInput[]
    NOT?: pointsScalarWhereWithAggregatesInput | pointsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"points"> | number
    points?: IntWithAggregatesFilter<"points"> | number
  }

  export type salesWhereInput = {
    AND?: salesWhereInput | salesWhereInput[]
    OR?: salesWhereInput[]
    NOT?: salesWhereInput | salesWhereInput[]
    id?: IntFilter<"sales"> | number
    amount?: FloatFilter<"sales"> | number
  }

  export type salesOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type salesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: salesWhereInput | salesWhereInput[]
    OR?: salesWhereInput[]
    NOT?: salesWhereInput | salesWhereInput[]
    amount?: FloatFilter<"sales"> | number
  }, "id">

  export type salesOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    _count?: salesCountOrderByAggregateInput
    _avg?: salesAvgOrderByAggregateInput
    _max?: salesMaxOrderByAggregateInput
    _min?: salesMinOrderByAggregateInput
    _sum?: salesSumOrderByAggregateInput
  }

  export type salesScalarWhereWithAggregatesInput = {
    AND?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[]
    OR?: salesScalarWhereWithAggregatesInput[]
    NOT?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sales"> | number
    amount?: FloatWithAggregatesFilter<"sales"> | number
  }

  export type show_timingWhereInput = {
    AND?: show_timingWhereInput | show_timingWhereInput[]
    OR?: show_timingWhereInput[]
    NOT?: show_timingWhereInput | show_timingWhereInput[]
    id?: IntFilter<"show_timing"> | number
    day?: DateTimeFilter<"show_timing"> | Date | string
    theater_id?: IntFilter<"show_timing"> | number
    movie_id?: IntFilter<"show_timing"> | number
    timing_id?: IntFilter<"show_timing"> | number
  }

  export type show_timingOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    theater_id?: SortOrder
    movie_id?: SortOrder
    timing_id?: SortOrder
  }

  export type show_timingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: show_timingWhereInput | show_timingWhereInput[]
    OR?: show_timingWhereInput[]
    NOT?: show_timingWhereInput | show_timingWhereInput[]
    day?: DateTimeFilter<"show_timing"> | Date | string
    theater_id?: IntFilter<"show_timing"> | number
    movie_id?: IntFilter<"show_timing"> | number
    timing_id?: IntFilter<"show_timing"> | number
  }, "id">

  export type show_timingOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    theater_id?: SortOrder
    movie_id?: SortOrder
    timing_id?: SortOrder
    _count?: show_timingCountOrderByAggregateInput
    _avg?: show_timingAvgOrderByAggregateInput
    _max?: show_timingMaxOrderByAggregateInput
    _min?: show_timingMinOrderByAggregateInput
    _sum?: show_timingSumOrderByAggregateInput
  }

  export type show_timingScalarWhereWithAggregatesInput = {
    AND?: show_timingScalarWhereWithAggregatesInput | show_timingScalarWhereWithAggregatesInput[]
    OR?: show_timingScalarWhereWithAggregatesInput[]
    NOT?: show_timingScalarWhereWithAggregatesInput | show_timingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"show_timing"> | number
    day?: DateTimeWithAggregatesFilter<"show_timing"> | Date | string
    theater_id?: IntWithAggregatesFilter<"show_timing"> | number
    movie_id?: IntWithAggregatesFilter<"show_timing"> | number
    timing_id?: IntWithAggregatesFilter<"show_timing"> | number
  }

  export type theaterWhereInput = {
    AND?: theaterWhereInput | theaterWhereInput[]
    OR?: theaterWhereInput[]
    NOT?: theaterWhereInput | theaterWhereInput[]
    id?: IntFilter<"theater"> | number
    name?: StringFilter<"theater"> | string
    capacity?: IntFilter<"theater"> | number
  }

  export type theaterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
  }

  export type theaterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: theaterWhereInput | theaterWhereInput[]
    OR?: theaterWhereInput[]
    NOT?: theaterWhereInput | theaterWhereInput[]
    name?: StringFilter<"theater"> | string
    capacity?: IntFilter<"theater"> | number
  }, "id">

  export type theaterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    _count?: theaterCountOrderByAggregateInput
    _avg?: theaterAvgOrderByAggregateInput
    _max?: theaterMaxOrderByAggregateInput
    _min?: theaterMinOrderByAggregateInput
    _sum?: theaterSumOrderByAggregateInput
  }

  export type theaterScalarWhereWithAggregatesInput = {
    AND?: theaterScalarWhereWithAggregatesInput | theaterScalarWhereWithAggregatesInput[]
    OR?: theaterScalarWhereWithAggregatesInput[]
    NOT?: theaterScalarWhereWithAggregatesInput | theaterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"theater"> | number
    name?: StringWithAggregatesFilter<"theater"> | string
    capacity?: IntWithAggregatesFilter<"theater"> | number
  }

  export type timeslotWhereInput = {
    AND?: timeslotWhereInput | timeslotWhereInput[]
    OR?: timeslotWhereInput[]
    NOT?: timeslotWhereInput | timeslotWhereInput[]
    id?: IntFilter<"timeslot"> | number
    start_time?: StringFilter<"timeslot"> | string
    end_time?: StringFilter<"timeslot"> | string
  }

  export type timeslotOrderByWithRelationInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type timeslotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: timeslotWhereInput | timeslotWhereInput[]
    OR?: timeslotWhereInput[]
    NOT?: timeslotWhereInput | timeslotWhereInput[]
    start_time?: StringFilter<"timeslot"> | string
    end_time?: StringFilter<"timeslot"> | string
  }, "id">

  export type timeslotOrderByWithAggregationInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    _count?: timeslotCountOrderByAggregateInput
    _avg?: timeslotAvgOrderByAggregateInput
    _max?: timeslotMaxOrderByAggregateInput
    _min?: timeslotMinOrderByAggregateInput
    _sum?: timeslotSumOrderByAggregateInput
  }

  export type timeslotScalarWhereWithAggregatesInput = {
    AND?: timeslotScalarWhereWithAggregatesInput | timeslotScalarWhereWithAggregatesInput[]
    OR?: timeslotScalarWhereWithAggregatesInput[]
    NOT?: timeslotScalarWhereWithAggregatesInput | timeslotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"timeslot"> | number
    start_time?: StringWithAggregatesFilter<"timeslot"> | string
    end_time?: StringWithAggregatesFilter<"timeslot"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type movieCreateInput = {
    name: string
    actors: string
  }

  export type movieUncheckedCreateInput = {
    id?: number
    name: string
    actors: string
  }

  export type movieUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    actors?: StringFieldUpdateOperationsInput | string
  }

  export type movieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    actors?: StringFieldUpdateOperationsInput | string
  }

  export type movieCreateManyInput = {
    id?: number
    name: string
    actors: string
  }

  export type movieUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    actors?: StringFieldUpdateOperationsInput | string
  }

  export type movieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    actors?: StringFieldUpdateOperationsInput | string
  }

  export type pointsCreateInput = {
    points: number
  }

  export type pointsUncheckedCreateInput = {
    id?: number
    points: number
  }

  export type pointsUpdateInput = {
    points?: IntFieldUpdateOperationsInput | number
  }

  export type pointsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type pointsCreateManyInput = {
    id?: number
    points: number
  }

  export type pointsUpdateManyMutationInput = {
    points?: IntFieldUpdateOperationsInput | number
  }

  export type pointsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type salesCreateInput = {
    amount: number
  }

  export type salesUncheckedCreateInput = {
    id?: number
    amount: number
  }

  export type salesUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type salesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type salesCreateManyInput = {
    id?: number
    amount: number
  }

  export type salesUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type salesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type show_timingCreateInput = {
    day: Date | string
    theater_id: number
    movie_id: number
    timing_id: number
  }

  export type show_timingUncheckedCreateInput = {
    id?: number
    day: Date | string
    theater_id: number
    movie_id: number
    timing_id: number
  }

  export type show_timingUpdateInput = {
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    theater_id?: IntFieldUpdateOperationsInput | number
    movie_id?: IntFieldUpdateOperationsInput | number
    timing_id?: IntFieldUpdateOperationsInput | number
  }

  export type show_timingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    theater_id?: IntFieldUpdateOperationsInput | number
    movie_id?: IntFieldUpdateOperationsInput | number
    timing_id?: IntFieldUpdateOperationsInput | number
  }

  export type show_timingCreateManyInput = {
    id?: number
    day: Date | string
    theater_id: number
    movie_id: number
    timing_id: number
  }

  export type show_timingUpdateManyMutationInput = {
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    theater_id?: IntFieldUpdateOperationsInput | number
    movie_id?: IntFieldUpdateOperationsInput | number
    timing_id?: IntFieldUpdateOperationsInput | number
  }

  export type show_timingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    theater_id?: IntFieldUpdateOperationsInput | number
    movie_id?: IntFieldUpdateOperationsInput | number
    timing_id?: IntFieldUpdateOperationsInput | number
  }

  export type theaterCreateInput = {
    name: string
    capacity: number
  }

  export type theaterUncheckedCreateInput = {
    id?: number
    name: string
    capacity: number
  }

  export type theaterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type theaterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type theaterCreateManyInput = {
    id?: number
    name: string
    capacity: number
  }

  export type theaterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type theaterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type timeslotCreateInput = {
    start_time: string
    end_time: string
  }

  export type timeslotUncheckedCreateInput = {
    id?: number
    start_time: string
    end_time: string
  }

  export type timeslotUpdateInput = {
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
  }

  export type timeslotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
  }

  export type timeslotCreateManyInput = {
    id?: number
    start_time: string
    end_time: string
  }

  export type timeslotUpdateManyMutationInput = {
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
  }

  export type timeslotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type movieCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    actors?: SortOrder
  }

  export type movieAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type movieMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    actors?: SortOrder
  }

  export type movieMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    actors?: SortOrder
  }

  export type movieSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type pointsCountOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type pointsAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type pointsMaxOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type pointsMinOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type pointsSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type salesCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type salesAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type salesMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type salesMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type salesSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type show_timingCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    theater_id?: SortOrder
    movie_id?: SortOrder
    timing_id?: SortOrder
  }

  export type show_timingAvgOrderByAggregateInput = {
    id?: SortOrder
    theater_id?: SortOrder
    movie_id?: SortOrder
    timing_id?: SortOrder
  }

  export type show_timingMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    theater_id?: SortOrder
    movie_id?: SortOrder
    timing_id?: SortOrder
  }

  export type show_timingMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    theater_id?: SortOrder
    movie_id?: SortOrder
    timing_id?: SortOrder
  }

  export type show_timingSumOrderByAggregateInput = {
    id?: SortOrder
    theater_id?: SortOrder
    movie_id?: SortOrder
    timing_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type theaterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
  }

  export type theaterAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type theaterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
  }

  export type theaterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
  }

  export type theaterSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type timeslotCountOrderByAggregateInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type timeslotAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type timeslotMaxOrderByAggregateInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type timeslotMinOrderByAggregateInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type timeslotSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}