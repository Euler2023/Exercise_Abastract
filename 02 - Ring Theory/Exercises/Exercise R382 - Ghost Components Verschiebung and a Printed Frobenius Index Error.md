---
title: 'Exercise R382: Ghost Components Verschiebung and a Printed Frobenius Index Error'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §4, Exercise 4, printed p. 134, PDF p. 153
source_refs:
- S4/ch-II/sec-4/ex-4
created: '2026-10-23'
---

# Exercise R382: Ghost Components Verschiebung and a Printed Frobenius Index Error

## Problem Statement

> [!question] Neukirch II.4.4
> Assume $pA=0$. For $a=(a_0,a_1,\ldots)\in W(A)$ consider $a^{(n)}=W_n(a)=a_0^{p^n}+pa_1^{p^{n-1}}+\cdots+p^na_n$, and $Va=(0,a_0,a_1,\ldots)$, $Fa=(a_0^p,a_1^p,\ldots)$, called respectively transfer (Verschiebung) and Frobenius. Show that
> $$
> (Va)^{(n)}=pa^{(n-1)},\qquad a^{(n)}=(Fa)^{(n)}+p^na_n.
> $$

> [!warning] Source issue
> The second displayed identity is printed with $(Fa)^{(n)}$. Direct expansion shows it needs $(Fa)^{(n-1)}$ for $n\ge1$. The first formula also requires $n\ge1$; at $n=0$ its left side is zero. The original formula is preserved above.

## Hints

> [!hint]- Hint 1
> Write out the ghost polynomials; check the second formula already at $n=1$.

> [!hint]- Hint 2
> The correct index on the ghost component of $Fa$ is $n-1$. State $n=0$ separately.

## Solution

> [!success]- Independent derivation and stated source corrections
> The first identity holds for $n\ge1$ in every commutative ring, without the characteristic restriction:
> $$
> W_n(Va)=\sum_{i=1}^np^ia_{i-1}^{p^{n-i}}=pW_{n-1}(a).
> $$
> At $n=0$, $W_0(Va)=0$; no negative ghost index is defined.
>
> For the second, direct expansion gives, again universally,
> $$
> W_{n-1}(Fa)=\sum_{i=0}^{n-1}p^i(a_i^p)^{p^{n-1-i}}
> =\sum_{i=0}^{n-1}p^ia_i^{p^{n-i}},
> $$
> and hence $W_n(a)=W_{n-1}(Fa)+p^na_n$ for $n\ge1$. This proves the corrected identity. At $n=0$ the definition is simply $W_0(a)=a_0$.
>
> The printed second formula with index $n$ fails even under its stated hypothesis. In $A=\mathbb F_p(t)$ take $a=(t,0,0,\ldots)$ and $n=1$. Its left side is $t^p$, while its right side is $t^{p^2}$, since $p=0$ in $A$. These rational functions differ. Under $pA=0$ the corrected identity reads $a_0^{p^n}=(a_0^p)^{p^{n-1}}$, which is valid but cannot distinguish Witt vectors with equal first coordinates.

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors and Artin-Schreier-Witt Theory]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §4, Exercise 4, printed p. 134, PDF p. 153].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
