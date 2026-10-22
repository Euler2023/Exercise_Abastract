---
title: 'Exercise R416: Factorization of Number Field Gauss Sums'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §6, Exercise 1, printed p. 484, PDF p. 503
source_refs:
- S4/ch-VII/sec-6/ex-1
created: '2026-10-23'
---

# Exercise R416: Factorization of Number Field Gauss Sums

## Problem Statement

> [!question] Neukirch VII.6.1
> Let $\mathfrak m=\prod_{i=1}^r\mathfrak m_i$ be a decomposition of $\mathfrak m$ into integral ideals which are pairwise relatively prime. Then one has the decompositions
> $$
> (\mathfrak o/\mathfrak m)^*\cong\prod_{i=1}^r(\mathfrak o/\mathfrak m_i)^*
> $$
> and
> $$
> \mathfrak m^{-1}\mathfrak d^{-1}/\mathfrak d^{-1}
> \cong\bigoplus_{i=1}^r\mathfrak m_i^{-1}\mathfrak d^{-1}/\mathfrak d^{-1}.
> $$
> Let $\chi_f$ be a character of $(\mathfrak o/\mathfrak m)^*$, and let $\chi_{fi}$ be the characters of $(\mathfrak o/\mathfrak m_i)^*$ defined by $\chi_f$. If $y\in\mathfrak m^{-1}\mathfrak d^{-1}/\mathfrak d^{-1}$, and if $y_i\in\mathfrak m_i^{-1}\mathfrak d^{-1}/\mathfrak d^{-1}$ are the components of $y$ with respect to the above decomposition, then
> $$
> \tau_{\mathfrak m}(\chi_f,y)=\prod_{i=1}^r\tau_{\mathfrak m_i}(\chi_{fi},y_i).
> $$

## Hints

> [!hint]- Hint 1
> The first decomposition is the Chinese remainder theorem. For the second, use the sum map from the smaller inverse-ideal quotients.

> [!hint]- Hint 2
> For $y_i\in\mathfrak m_i^{-1}\mathfrak d^{-1}$, the exponential $e^{2\pi i\operatorname{Tr}(xy_i)}$ depends only on $x\bmod\mathfrak m_i$. Expand the resulting finite product of sums.

## Solution

> [!success]- Independent derivation
> Let $K$ be the number field, $\mathfrak o$ its integer ring, and $\mathfrak d$ its different. The Chinese remainder ring isomorphism sends $x\bmod\mathfrak m$ to $(x\bmod\mathfrak m_i)_i$. Taking units gives the first displayed decomposition.
>
> Define the sum map
> $$
> \Phi:\bigoplus_i\mathfrak m_i^{-1}\mathfrak d^{-1}/\mathfrak d^{-1}
> \longrightarrow\mathfrak m^{-1}\mathfrak d^{-1}/\mathfrak d^{-1},
> \qquad (y_i)_i\longmapsto\sum_i y_i.
> $$
> It is well-defined because $\mathfrak m_i^{-1}\subseteq\mathfrak m^{-1}$. Localize at a nonzero prime $\mathfrak p$. At most one $\mathfrak m_i$ has positive $\mathfrak p$-valuation. All other localized source quotients vanish, and the remaining one equals the target quotient, where $\Phi$ is the identity. Thus its kernel and cokernel have zero localization at every maximal ideal and are zero. This proves the second decomposition. The detection fact used here follows directly: if a nonzero module element survives, its proper annihilator lies in a maximal ideal where it still survives.
>
> Choose representatives with $y\equiv\sum_i y_i\pmod{\mathfrak d^{-1}}$. If $x_i$ is the $i$th CRT residue of $x$, choose any integral lift of $x_i$. Then $x-x_i\in\mathfrak m_i$, so
> $$
> \operatorname{Tr}((x-x_i)y_i)\in\mathbb Z.
> $$
> Consequently
> $$
> e^{2\pi i\operatorname{Tr}(xy)}=\prod_i e^{2\pi i\operatorname{Tr}(x_i y_i)},
> \qquad \chi_f(x)=\prod_i\chi_{fi}(x_i).
> $$
> The definition of the Gauss sum now gives
> $$
> \begin{aligned}
> \tau_{\mathfrak m}(\chi_f,y)
> &=\sum_{(x_i)\in\prod_i(\mathfrak o/\mathfrak m_i)^*}
> \prod_i\chi_{fi}(x_i)e^{2\pi i\operatorname{Tr}(x_i y_i)}\\
> &=\prod_i\sum_{x_i\in(\mathfrak o/\mathfrak m_i)^*}\chi_{fi}(x_i)e^{2\pi i\operatorname{Tr}(x_i y_i)}.
> \end{aligned}
> $$
> This is the desired identity, with no primitivity hypothesis. For $K=\mathbb Q$, $\mathfrak m=(15)$ and $y=1/15$, one possible decomposition is $y_1=2/3$, $y_2=2/5$, since $2/3+2/5\equiv1/15\pmod{\mathbb Z}$; the different denominators are essential.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Hecke Characters and Their Finite and Infinite Parts|Hecke Characters and Their Finite and Infinite Parts]]

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- **Source status:** Both decompositions and the complete product identity were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §6, Exercise 1, printed p. 484, PDF p. 503]. Definition (6.3) and the trace-dual interpretation were checked at [printed p. 473, PDF p. 492].
- **Proof scope:** Independent CRT and finite-sum proof. The zero/unit-ideal factors have trivial quotient and contribute $1$. No source figure is required.
