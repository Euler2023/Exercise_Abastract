---
title: "Exercise LA649: Fourier Transform under a Real Matrix Change"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.10, Exercise 4.10.2, printed p. 154, PDF p. 168"
source_refs:
  - "S7/ch-4/sec-10/ex-2"
created: 2026-10-28
---

# Exercise LA649: Fourier Transform under a Real Matrix Change

## Problem Statement

> [!question] Original Exercise 4.10.2
> Let $f\in L^1(\mathbb R^2)$. For $\gamma\in\operatorname{SL}_2(\mathbb R)$ and $r>0$, show that $\varphi(x)=f(x\gamma r)$ has Fourier transform $\widehat\varphi(x)=r^{-2}\widehat f(x\gamma^{-T}/r)$, where $\gamma^{-T}$ is the inverse transpose. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Use row-vector notation consistently and substitute $y=x\gamma r$.

> [!hint]- Hint 2
> The Euclidean pairing becomes $\langle y,x\gamma^{-T}/r\rangle$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> At frequency $\xi$, the defining integral is $\int f(x\gamma r)e^{-2\pi i x\xi^T}\,dx$. Set $y=x\gamma r$, so $x=y\gamma^{-1}/r$. The Jacobian is $r^{-2}$ because $\det\gamma=1$. Moreover
> $$
> x\xi^T=y\gamma^{-1}\xi^T/r=y(\xi\gamma^{-T}/r)^T.
> $$
> Thus $\widehat\varphi(\xi)=r^{-2}\widehat f(\xi\gamma^{-T}/r)$, as required. The same change of variables proves $\varphi\in L^1$, so every integral is justified. The transpose is essential: row-vector multiplication on the argument induces inverse-transpose multiplication on frequencies.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 154 / PDF 168. The solution above is independently derived.
- **Routing:** The principal toolkit is linear-algebra; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
