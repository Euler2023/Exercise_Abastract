---
title: "Exercise Gal75: Square Classes and Biquadratic Extensions"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - square-classes
  - biquadratic-extensions
source: "2025 S.-T. Yau College Student Mathematics Contest, Algebra and Number Theory, Problem 1; statement supplied by the user; linked web source not independently accessible"
created: 2026-08-12
---

# Exercise Gal75: Square Classes and Biquadratic Extensions

## Problem Statement

> [!question] 2025 contest problem
> Let $F$ be a field of characteristic different from $2$, let $F^\times$ be its multiplicative group, and put
> $$
> F^{\times2}=\{a^2:a\in F^\times\}.
> $$
> Prove that $F$ has a Galois extension with Galois group $C_2\times C_2$ if and only if
> $$
> |F^\times:F^{\times2}|>2.
> $$
> Furthermore, prove that these Galois extensions are precisely the splitting fields of irreducible polynomials
> $$
> X^4+aX^2+b\in F[X]
> $$
> with $b\in F^{\times2}$.

## Hints

> [!hint]- Hint 1
> Regard $F^\times/F^{\times2}$ as a vector space over $\mathbb F_2$.

> [!hint]- Hint 2
> From independent square classes $[d_1],[d_2]$, consider $F(\sqrt{d_1},\sqrt{d_2})$ and the primitive element $\sqrt{d_1}+\sqrt{d_2}$.

> [!hint]- Hint 3
> If $b=c^2$, express the roots of $X^4+aX^2+c^2$ using square roots of $-a+2c$ and $-a-2c$.

## Solution

> [!success]- Solution
> The quotient $F^\times/F^{\times2}$ has exponent $2$, hence is an $\mathbb F_2$-vector space. Therefore it has more than two elements exactly when it contains two linearly independent nonzero classes $[d_1]$ and $[d_2]$. Equivalently,
> $$
> d_1,d_2,d_1d_2\notin F^{\times2}.
> $$
> In this case
> $$
> K=F(\sqrt{d_1},\sqrt{d_2})
> $$
> has degree $4$. It is the splitting field of $(X^2-d_1)(X^2-d_2)$, and its four automorphisms independently change the signs of the two square roots. Thus
> $$
> \operatorname{Gal}(K/F)\cong C_2\times C_2.
> $$
>
> Conversely, suppose $K/F$ is Galois with group $C_2^2$. Its three subgroups of order $2$ correspond to three distinct quadratic intermediate fields. Since $\operatorname{char}F\ne2$, each has the form $F(\sqrt d)$ for a nontrivial square class $[d]$. Distinct quadratic fields give distinct nontrivial square classes. Together with the trivial class, this yields at least four elements of $F^\times/F^{\times2}$, so
> $$
> |F^\times:F^{\times2}|>2.
> $$
>
> We next prove the polynomial characterization. Let
> $$
> K=F(\sqrt{d_1},\sqrt{d_2})
> $$
> be a $C_2^2$ extension and put $\gamma=\sqrt{d_1}+\sqrt{d_2}$. The four sign choices form the Galois orbit of $\gamma$, so its orbit has size $4$ and $F(\gamma)=K$. Direct calculation gives
> $$
> \gamma^4-2(d_1+d_2)\gamma^2+(d_1-d_2)^2=0.
> $$
> Consequently the minimal polynomial of $\gamma$ is
> $$
> q(X)=X^4-2(d_1+d_2)X^2+(d_1-d_2)^2.
> $$
> Its constant term is a nonzero square in $F$, it is irreducible because $[F(\gamma):F]=4$, and all its roots lie in $K$. Thus $K$ is the splitting field of an irreducible polynomial of the required form.
>
> For the converse, let
> $$
> q(X)=X^4+aX^2+c^2
> $$
> be irreducible over $F$, with $c\in F^\times$. Define
> $$
> d_1=-a+2c,
> \qquad
> d_2=-a-2c.
> $$
> In an algebraic closure, the identity
> $$
> \left(\frac{\sqrt{d_1}\mathbin{\pm}\sqrt{d_2}}2\right)^2
> =\frac{-a\mathbin{\pm}\sqrt{a^2-4c^2}}2
> $$
> shows that all four roots of $q$ lie in
> $$
> K=F(\sqrt{d_1},\sqrt{d_2}).
> $$
> Hence the splitting field has degree at most $4$. On the other hand, any root $\gamma$ of the irreducible quartic satisfies $[F(\gamma):F]=4$, so the splitting field has degree at least $4$. It follows that $[K:F]=4$ and $K$ is the splitting field.
>
> The equality $[K:F]=4$ means that $[d_1]$ and $[d_2]$ are independent square classes. Therefore $K/F$ is Galois and its two independent sign changes give
> $$
> \operatorname{Gal}(K/F)\cong C_2\times C_2.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Square Classes and Multiquadratic Extensions|Square Classes and Multiquadratic Extensions]]
- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Composita and Restriction Maps]]
- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

The problem statement was supplied with this [source page](https://www.zhihu.com/question/1907031104944342022/answer/1907562727355942907); the page was not independently accessible during archival. The proof is an independent derivation. The notation $F^{\times2}$ excludes zero, so the hypothesis $b\in F^{\times2}$ means $b$ is a nonzero square.
