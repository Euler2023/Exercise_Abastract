---
title: Composita and Restriction Maps
topic: galois-theory
tags:
  - concept
  - galois-theory
  - composita
  - restriction-maps
created: 2026-08-12
---

# Composita and Restriction Maps

## Definition

> [!info] Compositum
> Let $L_1$ and $L_2$ be extensions of $F$ contained in a common overfield. Their **compositum** $L_1L_2$ is the smallest subfield containing both $L_1$ and $L_2$. Equivalently, it consists of quotients of finite sums of products $a_ib_i$ with $a_i\in L_1$ and $b_i\in L_2$.

> [!info] Restriction map
> If $E/F$ is Galois and $L/F$ is an intermediate extension that is normal, restriction defines a surjective homomorphism
> $$
> \operatorname{res}_L:\operatorname{Gal}(E/F)\longrightarrow\operatorname{Gal}(L/F),
> \qquad \sigma\longmapsto \sigma|_L,
> $$
> whose kernel is $\operatorname{Gal}(E/L)$. Thus
> $$
> \operatorname{Gal}(E/F)/\operatorname{Gal}(E/L)
> \cong \operatorname{Gal}(L/F).
> $$

## Intuition

The intersection $L_1\cap L_2$ measures how much information the two extensions share. When this intersection is only $F$, automorphisms coming from one side can often be extended independently across the other side. In the finite separable setting this is the field-theoretic form of linear disjointness.

## Key Properties

Let $E/F$ be finite Galois and put $H_i=\operatorname{Gal}(E/L_i)$.

- The compositum $L_1L_2$ corresponds to $H_1\cap H_2$.
- The intersection $L_1\cap L_2$ corresponds to the generated subgroup $\langle H_1,H_2\rangle$.
- If $L_1/F$ is normal, then $H_1\trianglelefteq\operatorname{Gal}(E/F)$.
- If $E=L_1L_2$, $L_1\cap L_2=F$, and $L_1/F$ is normal, then
  $$
  \operatorname{Gal}(E/F)=H_1\rtimes H_2,
  \qquad
  H_2\cong\operatorname{Gal}(L_1/F).
  $$
- If both $L_1/F$ and $L_2/F$ are Galois and $L_1\cap L_2=F$, restriction gives
  $$
  \operatorname{Gal}(L_1L_2/F)
  \cong \operatorname{Gal}(L_1/F)\times\operatorname{Gal}(L_2/F).
  $$
- For finite extensions, if one of $L_1/F,L_2/F$ is Galois, then
  $$
  [L_1L_2:F]=\frac{[L_1:F][L_2:F]}{[L_1\cap L_2:F]}.
  $$

## Examples

> [!example] An $S_3$ extension
> Let $E$ be the splitting field of an irreducible cubic with nonsquare discriminant. Its unique quadratic subfield $L_1$ is normal over $F$, while a root field $L_2$ is generally not. Then $E=L_1L_2$, $L_1\cap L_2=F$, and
> $$
> S_3\cong C_3\rtimes C_2.
> $$
> This example explains why normality of only one factor yields a semidirect product rather than necessarily a direct product.

> [!example] Two independent quadratic fields
> If $a,b,ab$ are nonsquares in a field of characteristic different from $2$, then
> $$
> \operatorname{Gal}(F(\sqrt a,\sqrt b)/F)\cong C_2\times C_2.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Exercises

- [[05 - Galois Theory/Exercises/Exercise Gal7 - Galois Groups of Nested Radicals over Q Omega|Exercise Gal7]]
- [[05 - Galois Theory/Exercises/Exercise Gal72 - Composita and Semidirect Products|Exercise Gal72]]
- [[05 - Galois Theory/Exercises/Exercise Gal73 - Intermediate Fields of an S3 Times C2 Extension|Exercise Gal73]]
- [[05 - Galois Theory/Exercises/Exercise Gal74 - Two S3 Splitting Fields and Their Compositum|Exercise Gal74]]
- [[05 - Galois Theory/Exercises/Exercise Gal75 - Square Classes and Biquadratic Extensions|Exercise Gal75]]

## Source and Proof Status

The restriction isomorphism is contained in J. S. Milne, *Fields and Galois Theory*, v5.10, Proposition 3.18, printed p. 41, PDF p. 40. The formulations and examples here are independent exposition for this vault.
