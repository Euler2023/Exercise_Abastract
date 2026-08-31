---
title: "Exercise R35: Fermat and Wilson Theorems"
topic: ring-theory
difficulty: intermediate
status: completed
tags:
  - exercise
  - ring-theory
  - modular-arithmetic
  - fermat-theorem
  - wilson-theorem
source: Michael Artin, Algebra, 2nd ed., Ch. 3, Section 1, Ex. 1.8, printed p. 99, PDF p. 111
created: 2026-08-23
---

# Exercise R35: Fermat and Wilson Theorems

## Problem Statement

> [!question] Exercise 1.8
> Let $p$ be prime.
> 
> **(a)** Prove Fermat's theorem: $a^p\equiv a\pmod p$ for every integer $a$.
> 
> **(b)** Prove Wilson's theorem: $(p-1)!\equiv-1\pmod p$.

## Hints

> [!hint]- Hint 1
> For Fermat, multiplication by a nonzero residue permutes $\mathbb F_p^\times$.

> [!hint]- Hint 2
> For Wilson, pair every element with its inverse.

## Solution

> [!success]- Solution
> If $p\mid a$, Fermat's congruence is immediate. Otherwise multiplication by $a$ permutes $1,\ldots,p-1$ modulo $p$, so
> 
> $$
> a^{p-1}(p-1)!\equiv(p-1)!\pmod p.
> $$
> 
> Cancellation gives $a^{p-1}\equiv1$, hence $a^p\equiv a$.
> 
> For Wilson's theorem, pair each nonzero residue with its inverse. The only self-inverse residues satisfy $x^2=1$, hence are $1$ and $-1$. All other pairs contribute $1$, so
> 
> $$
> (p-1)!\equiv1\cdot(-1)\equiv-1\pmod p.
> $$
> 
> For $p=2$, the same congruence reads $1\equiv-1\pmod2$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §1, Ex. 1.8, printed p. 99, PDF p. 111]. The solution is an independent derivation for this vault, not a solution printed in Artin.
