---
title: "Exercise R198: Product Identity for Fermat Numbers"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - induction
  - fermat-numbers
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.1, About Proofs, Ex. A.6, printed p. 521, PDF p. 533"
created: 2026-08-28
---

# Exercise R198: Product Identity for Fermat Numbers

## Problem Statement

> [!question] Exercise A.6
> Let $a_n=2^{2^n}+1$. Prove that $a_n=a_0a_1\cdots a_{n-1}+2$.

## Hints

> [!hint]- Hint 1
> Multiply the induction hypothesis $a_n-2=a_0\cdots a_{n-1}$ by $a_n$.

## Solution

> [!success]- Solution
> For $n=1$, the identity is $5=3+2$. Suppose
>
> $$
> a_0a_1\cdots a_{n-1}=a_n-2.
> $$
>
> Multiplying by $a_n=2^{2^n}+1$ gives
>
> $$
> \begin{aligned}
> a_0a_1\cdots a_n
> &=(a_n-2)a_n\\
> &=(2^{2^n}-1)(2^{2^n}+1)\\
> &=2^{2^{n+1}}-1\\
> &=a_{n+1}-2.
> \end{aligned}
> $$
>
> Rearranging proves $a_{n+1}=a_0a_1\cdots a_n+2$, completing the induction.

## Related Concepts

- [[02 - Ring Theory/Concepts/Mathematical Induction and Peano Arithmetic|Mathematical Induction and Peano Arithmetic]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Routing:** Ring Theory is primary because the result is an integer product identity built from repeated difference-of-squares factorizations.
- **Source status:** [S1, Appendix, §A.1, Ex. A.6, printed p. 521, PDF p. 533]. The induction is independent.
