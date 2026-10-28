---
title: "Exercise Rep167: Gauss Transforms and Paired Character Eisenstein Equations"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.10, Exercise 4.10.8, printed p. 155, PDF p. 169"
source_refs:
  - "S7/ch-4/sec-10/ex-8"
created: 2026-10-28
---

# Exercise Rep167: Gauss Transforms and Paired Character Eisenstein Equations

## Problem Statement

> [!question] Original Exercise 4.10.8
> (a) Let $\psi,\phi$ be primitive characters modulo $u,v$, with $(\psi\phi)(-1)=(-1)^k$ and $uv=N$. If $a(cv,d+ev)=\psi(c)\overline\phi(d)$ and $a(x,y)=0$ otherwise, show
> $$
> \widehat a(-cu,-(d+eu))=\frac{\phi(-1)g(\overline\phi)}v g(\psi)\phi(c)\overline\psi(d),\quad\widehat a(x,y)=0\text{ otherwise}.
> $$
> (Hints for this exercise are at the end of the book.)
>
> (b) Define $G_k^{\psi,\phi}(\tau,s)=\sum_{c=0}^{u-1}\sum_{d=0}^{v-1}\sum_{e=0}^{u-1}\psi(c)\overline\phi(d)G_k^{(cv,d+ev)}(\tau,s)$. Show
> $$
> G_k^a=G_k^{\psi,\phi}+\psi(-1)(g(\overline\phi)/v)g(\psi)G_k^{\phi,\psi}.
> $$
> Thus the eigenspace functional equations involve only two series at a time.
>
> (c) Define $b$ and $E_k^{\psi,\phi}$ by $a=(g(\overline\phi)/v)b$ and $G_k^{\psi,\phi}=(g(\overline\phi)/v)E_k^{\psi,\phi}$. Show $G_k^b=E_k^{\psi,\phi}+E_k^{\phi,\psi}$.

> [!warning] Source issue
> The finite-sum identities (a)–(c) are valid. If the final functional-equation conclusion is applied to negative odd $k$, Theorem 4.10.2 requires the sign correction proved in [[07 - Modular Forms/Exercises/Exercise MF104 - Analytic Continuation in Zero and Negative Weight|Exercise 4.10.6]]; the printed combination then has root number $-1$.

## Hints

> [!hint]- Hint 1
> The sum over $e$ forces the first transform coordinate to be divisible by $u$.

> [!hint]- Hint 2
> Apply the primitive Gauss identity $\sum_r\chi(r)e^{2\pi irt/m}=\overline\chi(t)g(\chi)$, including nonunits.

> [!hint]- Hint 3
> For(c), use $g(\psi)g(\overline\psi)=\psi(-1)u$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> In the first definition the parameters range over $c\pmod u$, $d\pmod v$, $e\pmod u$; these give a unique description of each supported vector. For the transformed support use $c\pmod v$, $d\pmod u$, $e\pmod v$.
>
> **(a)** At an arbitrary vector $(X,Y)$, the $e$-sum in the transform is $\sum_{e\ (u)}e^{-2\pi i eX/u}$; it vanishes unless $u\mid X$. Write $(X,Y)=(-Cu,-t)$. Direct substitution in the alternating Fourier kernel then leaves
> $$
> \widehat a(-Cu,-t)=\frac1v\left(\sum_{c\ (u)}\psi(c)e^{2\pi ict/u}\right)\left(\sum_{d\ (v)}\overline\phi(d)e^{-2\pi iCd/v}\right).
> $$
> The primitive Gauss-sum identity evaluates these factors as $\overline\psi(t)g(\psi)$ and $\phi(-C)g(\overline\phi)$. Writing $t=d+eu$ proves the stated formula, including zeros when the character arguments are nonunits. The primitive Gauss identity here is the established input valid for all integer arguments, not just units.
>
> **(b)** Insert(a) into $G_k^a=\sum_w(a(w)+(-1)^k\widehat a(-w))G_k^w$. Its first summand is the defined $G_k^{\psi,\phi}$. In the second, swap the moduli and characters; the scalar is $(-1)^k\phi(-1)(g(\overline\phi)/v)g(\psi)=\psi(-1)(g(\overline\phi)/v)g(\psi)$ by the parity condition. This gives the requested paired expression.
>
> **(c)** Linearity of symmetrization gives $G_k^b=(v/g(\overline\phi))G_k^a$. Normalize the first term of(b) to $E_k^{\psi,\phi}$, and normalize the swapped term by $G_k^{\phi,\psi}=(g(\overline\psi)/u)E_k^{\phi,\psi}$. Its total scalar becomes
> $$
> \psi(-1)\frac{g(\psi)g(\overline\psi)}u=\psi(-1)^2=1.
> $$
> Primitive Gauss sums are nonzero, so the normalizations are legitimate, including the trivial character of conductor one. This proves the symmetric identity. For $k>0$ or negative even $k$, Theorem4.10.2 gives a symmetric completed two-series equation. For negative odd $k$, the printed algebraic identity remains valid, but the corrected analysis of Exercise 4.10.6 gives an antisymmetric equation for this printed combination. Thus the coefficient identity in (c) holds in every stated parity, while unconditional negative odd-weight symmetry does not.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 155 / PDF 169. The solution above is independently derived.
- **Routing:** The principal toolkit is representation-theory; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
