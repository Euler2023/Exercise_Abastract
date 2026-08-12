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

> [!example] A mixed radical compositum and its Galois closure
> In [[05 - Galois Theory/Exercises/Exercise Gal28 - A Primitive Element of a Compositum|Exercise Gal28]],
>
> $$
> \mathbb Q(\sqrt[3]2,\sqrt3)
> =\mathbb Q(\sqrt[3]2+\sqrt3)
> $$
>
> is a degree-$6$ compositum with an explicit primitive element. Passing to splitting fields gives a second compositum whose trivial intersection yields the direct-product Galois group $S_3\times C_2$.

> [!example] A compositum yielding a semidirect product
> In [[05 - Galois Theory/Exercises/Exercise Gal78 - The Splitting Field of x7 Minus 8|Exercise Gal78]], the splitting field
>
> $$
> \mathbb Q(\sqrt[7]8,\zeta_7)
> =\mathbb Q(\sqrt[7]8)\mathbb Q(\zeta_7)
> $$
>
> has Galois group $C_7\rtimes C_6$, not $C_7\times C_6$. The cyclotomic factor is Galois over $\mathbb Q$, but the real radical factor is not; the resulting nontrivial conjugation action obstructs a direct product.

> [!example] Two independent quadratic fields
> If $a,b,ab$ are nonsquares in a field of characteristic different from $2$, then
> $$
> \operatorname{Gal}(F(\sqrt a,\sqrt b)/F)\cong C_2\times C_2.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```


## Source and Proof Status

The restriction isomorphism is contained in J. S. Milne, *Fields and Galois Theory*, v5.10, Proposition 3.18, printed p. 41, PDF p. 40. The formulations and examples here are independent exposition for this vault.
