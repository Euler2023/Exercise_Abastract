---
title: "Exercise Gal72: Composita and Semidirect Products"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - composita
  - semidirect-products
source: "User-provided proposition; independent derivation using the Fundamental Theorem of Galois Theory"
created: 2026-08-12
---

# Exercise Gal72: Composita and Semidirect Products

## Problem Statement

> [!question] Proposition on a compositum
> Let $K/F$ be a finite Galois extension and let $L_1,L_2$ be intermediate fields such that
> $$
> K=L_1L_2,\qquad L_1\cap L_2=F.
> $$
> Assume that $L_1/F$ is normal. Prove that, with
> $$
> H_1=\operatorname{Gal}(K/L_1),
> \qquad
> H_2=\operatorname{Gal}(K/L_2),
> $$
> one has:
>
> 1. $\operatorname{Gal}(K/F)=H_1\rtimes H_2$ as an internal semidirect product;
> 2. restriction induces $H_2\cong\operatorname{Gal}(L_1/F)$;
> 3. $[K:F]=[L_1:F][L_2:F]$.
>
> Finally, prove that if $L_2/F$ is also normal, the semidirect product is a direct product.

## Hints

> [!hint]- Hint 1
> Translate $K=L_1L_2$ and $L_1\cap L_2=F$ through the Galois correspondence.

> [!hint]- Hint 2
> Normality of $L_1/F$ is equivalent to $H_1\trianglelefteq G$, where $G=\operatorname{Gal}(K/F)$.

> [!hint]- Hint 3
> Study the restriction map $H_2\to\operatorname{Gal}(L_1/F)$ and identify both its kernel and its order.

## Solution

> [!success]- Solution
> Put $G=\operatorname{Gal}(K/F)$. The lattice rules in the Galois correspondence give
> $$
> \operatorname{Gal}(K/L_1L_2)=H_1\cap H_2.
> $$
> Since $L_1L_2=K$, its left side is trivial; hence
> $$
> H_1\cap H_2=\{1\}.
> $$
>
> Because $L_1/F$ is normal, $H_1\trianglelefteq G$. Therefore $H_1H_2$ is a subgroup of $G$. An element is fixed by $H_1H_2$ precisely when it is fixed by both $H_1$ and $H_2$, so
> $$
> K^{H_1H_2}=K^{H_1}\cap K^{H_2}=L_1\cap L_2=F.
> $$
> The only subgroup of $G$ with fixed field $F$ is $G$ itself. Consequently
> $$
> H_1H_2=G.
> $$
> We now have $H_1\trianglelefteq G$, $H_1\cap H_2=\{1\}$, and $H_1H_2=G$. These are exactly the conditions for the internal semidirect product
> $$
> G=H_1\rtimes H_2.
> $$
>
> Since every $h\in H_2$ fixes $L_2$ and $L_1/F$ is normal, it restricts to an $F$-automorphism of $L_1$. Thus restriction defines
> $$
> \rho:H_2\longrightarrow\operatorname{Gal}(L_1/F).
> $$
> Its kernel consists of automorphisms fixing both $L_1$ and $L_2$, so
> $$
> \ker\rho=H_1\cap H_2=\{1\}.
> $$
> Moreover, the semidirect-product decomposition gives
> $$
> |H_2|=[G:H_1]=[L_1:F]
> =|\operatorname{Gal}(L_1/F)|,
> $$
> where the last equality uses that $L_1/F$ is finite Galois. Hence the injective map $\rho$ is surjective and therefore
> $$
> H_2\cong\operatorname{Gal}(L_1/F).
> $$
>
> Finally,
> $$
> [K:F]=|G|=|H_1||H_2|.
> $$
> Galois correspondence gives
> $$
> [L_1:F]=\frac{|G|}{|H_1|},
> \qquad
> [L_2:F]=\frac{|G|}{|H_2|}.
> $$
> Therefore
> $$
> [L_1:F][L_2:F]
> =\frac{|G|^2}{|H_1||H_2|}
> =|G|=[K:F].
> $$
>
> If $L_2/F$ is also normal, then $H_2\trianglelefteq G$. For $h_1\in H_1$ and $h_2\in H_2$, the commutator belongs to both normal subgroups:
> $$
> [h_1,h_2]\in H_1\cap H_2=\{1\}.
> $$
> Thus $H_1$ and $H_2$ commute elementwise, so the internal semidirect product is the internal direct product
> $$
> G=H_1\times H_2.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Composita and Restriction Maps]]
- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]
- [[05 - Galois Theory/Concepts/Normal Subgroups and Extensions|Normal Subgroups and Extensions]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Notes

The displayed semidirect product is an internal decomposition inside $G$. The abstract isomorphism with an external semidirect product also requires recording the conjugation action of $H_2$ on $H_1$. The proof is an independent derivation from the user-provided statement.
