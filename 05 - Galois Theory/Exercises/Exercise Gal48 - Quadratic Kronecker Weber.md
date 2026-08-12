---
title: "Exercise Gal48: The Quadratic Case of Kronecker-Weber"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, cyclotomic-extensions, kronecker-weber]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 10, Ex. 10.6, printed p. 509, PDF p. 521"
created: 2026-08-12
---

# Exercise Gal48: The Quadratic Case of Kronecker–Weber

## Problem Statement

> [!question] Exercise 10.6
> (a) Carry out the proof of Theorem 16.10.12. (b) Prove Kronecker–Weber for quadratic extensions.

## Hints

> [!hint]- Hint 1
> Use quadratic Gaussian periods for (a), then express a squarefree integer as a product of signed primes.

## Solution

> [!success]- Solution
> Let $p$ be odd and split $(\mathbb Z/p)^\times$ into quadratic residues and nonresidues. The two period sums have sum $-1$; counting differences shows their product is $(1-p)/4$ for $p\equiv1\pmod4$ and $(1+p)/4$ for $p\equiv3\pmod4$. Their difference therefore squares to $p$ or $-p$. Hence the unique quadratic subfield of $\mathbb Q(\zeta_p)$ is
> $$
> \mathbb Q\!\left(\sqrt{(-1)^{(p-1)/2}p}\right).
> $$
>
> Every quadratic field is $\mathbb Q(\sqrt d)$ for squarefree $d$. For each odd prime $p\mid d$, the preceding result places $\sqrt{p^*}$, $p^*=(-1)^{(p-1)/2}p$, in $\mathbb Q(\zeta_p)$. The factors $\sqrt{-1}$ and $\sqrt2$ lie in $\mathbb Q(\zeta_4)$ and $\mathbb Q(\zeta_8)$. Taking a compositum inside $\mathbb Q(\zeta_N)$, with $N$ the lcm of these conductors, yields $\sqrt d\in\mathbb Q(\zeta_N)$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

This proves only the quadratic case. Artin states but does not prove general Kronecker–Weber; the general theorem requires stronger input.
