---
title: 'Exercise F140: Independence of the Residue from a Uniformizer'
topic: field-theory
difficulty: advanced
status: not-started
tags:
- exercise
- field-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 6, printed p. 341, PDF p. 360
source_refs:
- S4/ch-V/sec-3/ex-6
created: '2026-10-23'
---

# Exercise F140: Independence of the Residue from a Uniformizer

## Problem Statement

> [!question] Neukirch V.3.6
> Let $\kappa$ be the residue class field of $K$ and $\pi$ a prime element such that $K=\kappa((\pi))$. Let
> $$
> d:K\longrightarrow\Omega^1_{K/\kappa},\qquad f\longmapsto df,
> $$
> be the canonical map to the differential module of $K/\kappa$ (see chap. III, §2, p. 200). For every $f\in K$ one has $df=f'_\pi d\pi$, where $f'_\pi$ is the formal derivative of $f$ in the expansion according to powers of $\pi$ with coefficients in $\kappa$. Show that for $\omega=(\sum_{i> -\infty}a_i\pi^i)d\pi$, the residue
> $$
> \operatorname{Res}\omega:=a_{-1}
> $$
> does not depend on the choice of the prime element $\pi$.

## Hints

> [!hint]- Hint 1
> For another uniformizer $u$, write $\pi=u(c_0+c_1u+\cdots)$ with $c_0\ne0$.

> [!hint]- Hint 2
> Prove the substitution identity first universally over $\mathbb Z[c_0,c_0^{-1},c_1,\ldots]$; this avoids dividing by a number which may vanish in characteristic $p$.

## Solution

> [!success]- Independent derivation
> Since the finite coefficient field $\kappa$ is perfect and $K$ has characteristic $p$, every $f\in K$ has a unique expression $f=\sum_{j=0}^{p-1}b_j^p\pi^j$. Differentiating gives $df=\sum_{j=1}^{p-1}j b_j^p\pi^{j-1}d\pi$, which agrees with the formal Laurent derivative. Thus $\Omega^1_{K/\kappa}=K\,d\pi$, and the usual chain rule for a change of parameter applies to the differential module in the question.
>
> Let $u$ be another prime element. There is a series $\pi=f(u)=u c(u)$ with $c(u)=c_0+c_1u+\cdots$ and $c_0\in\kappa^*$. We show, for every integer $r$,
> $$
> \operatorname{Res}_u\bigl(f(u)^r f'(u)\,du\bigr)=\begin{cases}1&r=-1,\\0&r\ne-1.\end{cases}
> $$
> For $r\ge0$ the series has no negative powers, so the assertion holds. For $r=-1$, write $f'/f=u^{-1}+c'/c$; the second term is a power series, giving residue $1$.
>
> For negative $r\ne-1$, a direct argument using $d(f^{r+1})/(r+1)$ would be invalid when $p\mid r+1$. Instead consider the coefficient of $u^{-1}$ in $f^r f'$, with the coefficients $c_i$ treated as indeterminates. For fixed $r<0$ this coefficient involves only finitely many $c_i$ and belongs to the torsion-free ring $R=\mathbb Z[c_0,c_0^{-1},c_1,\ldots,c_N]$. Over $R\otimes\mathbb Q$, the derivative identity gives residue zero, because the derivative of any Laurent series has zero $u^{-1}$ coefficient. The injection $R\hookrightarrow R\otimes\mathbb Q$ therefore shows the coefficient is already zero over $R$. Specializing $R\to\kappa$ proves the identity in every characteristic.
>
> Finally $\omega=\sum_{r\ge r_0}a_r\pi^r d\pi$ transforms to $\sum a_r f(u)^r f'(u)du$. Only finitely many negative $r$ can contribute to the residue; all nonnegative terms have nonnegative order. Applying the proved identity term by term yields $\operatorname{Res}_u\omega=a_{-1}=\operatorname{Res}_\pi\omega$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[03 - Field Theory/Concepts/Derivations and Differentials on Fields|Derivations and differentials]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 6, printed p. 341, PDF p. 360]. Independent universal-coefficient proof. The characteristic-$p$ step explicitly avoids division by $r+1$. No continuity assumption on arbitrary derivations is silently used: perfection of the finite coefficient field and the $p$-basis calculation identify the actual Kähler differential with the Laurent derivative.
