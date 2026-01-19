---
title: Partition Function
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
  - number-theory
created: 2026-01-19
---

# Partition Function

## Definition

> [!info] Definition (Partition Function)
> The **partition function** $p(n)$ counts the number of ways to write $n$ as a sum of positive integers (order doesn't matter).
>
> By convention, $p(0) = 1$.

## First Values

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|-----|---|---|---|---|---|---|---|---|---|---|---|
| $p(n)$ | 1 | 1 | 2 | 3 | 5 | 7 | 11 | 15 | 22 | 30 | 42 |

Example: $p(5) = 7$ because $5 = 5 = 4+1 = 3+2 = 3+1+1 = 2+2+1 = 2+1+1+1 = 1+1+1+1+1$.

## Generating Function

> [!abstract] Theorem (Euler)
> $$\sum_{n=0}^{\infty} p(n) q^n = \prod_{n=1}^{\infty} \frac{1}{1-q^n}$$

## Connection to Eta Function

> [!info] Modular Forms Connection
> $$\sum_{n=0}^{\infty} p(n) q^n = \frac{q^{1/24}}{\eta(\tau)}$$
> where $\eta$ is the [[07 - Modular Forms/Concepts/Eta Function|Dedekind eta function]].

This shows the partition function is closely related to modular forms!

## Ramanujan Congruences

> [!abstract] Theorem (Ramanujan)
> For all $n \geq 0$:
> $$p(5n + 4) \equiv 0 \pmod{5}$$
> $$p(7n + 5) \equiv 0 \pmod{7}$$
> $$p(11n + 6) \equiv 0 \pmod{11}$$

> [!tip] Proof via Modular Forms
> These congruences can be proved using the theory of modular forms and Hecke operators!

## Hardy-Ramanujan Asymptotic

> [!abstract] Theorem (Hardy-Ramanujan, 1918)
> $$p(n) \sim \frac{1}{4n\sqrt{3}} \exp\left(\pi\sqrt{\frac{2n}{3}}\right)$$

## Exact Formula

> [!abstract] Theorem (Rademacher, 1937)
> $$p(n) = \frac{1}{\pi\sqrt{2}} \sum_{k=1}^{\infty} A_k(n) \sqrt{k} \cdot \frac{d}{dn}\left(\frac{\sinh\left(\frac{\pi}{k}\sqrt{\frac{2}{3}(n-\frac{1}{24})}\right)}{\sqrt{n - \frac{1}{24}}}\right)$$
> where $A_k(n)$ involves Dedekind sums.

This exact formula comes from the **circle method** and uses modularity of $1/\eta$.

## Rank and Crank

> [!info] Definition (Dyson's Rank)
> The **rank** of a partition is (largest part) - (number of parts).
> Ranks mod 5 (or 7) explain Ramanujan's congruences combinatorially.

> [!info] Definition (Crank)
> The **crank** (Andrews-Garvan) provides combinatorial explanations for all three Ramanujan congruences.

## Partition Identities

> [!abstract] Euler's Identity
> Partitions into distinct parts = Partitions into odd parts
> $$\prod_{n=1}^{\infty}(1+q^n) = \prod_{n=1}^{\infty}\frac{1}{1-q^{2n-1}}$$

> [!abstract] Rogers-Ramanujan Identities
> $$\sum_{n=0}^{\infty} \frac{q^{n^2}}{(q;q)_n} = \prod_{n=0}^{\infty}\frac{1}{(1-q^{5n+1})(1-q^{5n+4})}$$

## Examples

> [!example] Example 1: $p(5) = 7$
> The 7 partitions of 5:
> 5, 4+1, 3+2, 3+1+1, 2+2+1, 2+1+1+1, 1+1+1+1+1

> [!example] Example 2: Ramanujan congruence
> $p(4) = 5 \equiv 0 \pmod 5$ (since $4 = 5 \cdot 0 + 4$)
> $p(9) = 30 \equiv 0 \pmod 5$ (since $9 = 5 \cdot 1 + 4$)
> $p(14) = 135 \equiv 0 \pmod 5$

> [!example] Example 3: Large values
> $p(100) = 190,569,292$
> $p(1000) \approx 2.4 \times 10^{31}$

## Mock Theta Functions

Ramanujan discovered **mock theta functions** which behave "almost" like modular forms. These are related to:
- Partitions with restricted parts
- Quantum modular forms
- Maass forms

## Related Concepts

- [[07 - Modular Forms/Concepts/Eta Function|Eta Function]]
- [[07 - Modular Forms/Concepts/Theta Functions|Theta Functions]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
