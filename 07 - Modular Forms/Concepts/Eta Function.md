---
title: Eta Function
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
created: 2026-01-19
---

# Eta Function

## Definition

> [!info] Definition (Dedekind Eta Function)
> The **Dedekind eta function** is:
> $$\eta(\tau) = q^{1/24} \prod_{n=1}^{\infty} (1 - q^n) = q^{1/24} \sum_{n=-\infty}^{\infty} (-1)^n q^{n(3n-1)/2}$$
> where $q = e^{2\pi i \tau}$.

The second expression is the **pentagonal number theorem**.

## Key Properties

1. $\eta(\tau) \neq 0$ for all $\tau \in \mathbb{H}$
2. $\eta(\tau + 1) = e^{\pi i/12} \eta(\tau)$
3. $\eta(-1/\tau) = \sqrt{-i\tau} \cdot \eta(\tau)$
4. $\eta^{24} = \Delta$ (the [[07 - Modular Forms/Concepts/Discriminant Function|discriminant]])

## Transformation Law

> [!abstract] Theorem (Full Transformation)
> For $\gamma = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \text{SL}_2(\mathbb{Z})$ with $c > 0$:
> $$\eta(\gamma \tau) = \varepsilon(a,b,c,d) \sqrt{c\tau + d} \cdot \eta(\tau)$$
> where $\varepsilon$ is a 24th root of unity (Dedekind sum).

## Dedekind Sum

> [!info] Definition
> The **Dedekind sum** is:
> $$s(d, c) = \sum_{r=1}^{c-1} \frac{r}{c}\left(\frac{dr}{c} - \left\lfloor\frac{dr}{c}\right\rfloor - \frac{1}{2}\right)$$
>
> The multiplier $\varepsilon$ involves $e^{\pi i s(d,c)}$.

## Connection to Partition Function

> [!abstract] Theorem
> $$\frac{1}{\eta(\tau)} = q^{-1/24} \sum_{n=0}^{\infty} p(n) q^n$$
> where $p(n)$ is the [[07 - Modular Forms/Concepts/Partition Function|partition function]].

## Eta Products

> [!info] Definition (Eta Product)
> An **eta product** is a function of the form:
> $$f(\tau) = \prod_{d | N} \eta(d\tau)^{r_d}$$
> where $r_d \in \mathbb{Z}$.

> [!abstract] Theorem (Ligozat)
> An eta product $\prod \eta(d\tau)^{r_d}$ is a modular form for $\Gamma_0(N)$ if:
> 1. $\sum_d r_d \equiv 0 \pmod{24}$
> 2. $\sum_d d \cdot r_d \equiv 0 \pmod{24}$
> 3. $\prod_d d^{r_d}$ is a perfect square
> 4. Additional conditions at cusps

## Examples

> [!example] Example 1: Discriminant
> $$\Delta(\tau) = \eta(\tau)^{24} = q \prod_{n=1}^{\infty}(1-q^n)^{24}$$

> [!example] Example 2: Weight 1/2 form
> $\eta(\tau)$ itself is a modular form of weight $1/2$ for a metaplectic double cover.

> [!example] Example 3: Euler's product
> $$\eta(\tau) = q^{1/24}(1-q)(1-q^2)(1-q^3)\cdots$$

> [!example] Example 4: Generating function
> $$\frac{1}{\eta(24\tau)} = \sum_{n=0}^{\infty} p(n) q^{24n-1}$$

## Pentagonal Number Theorem

> [!abstract] Theorem (Euler)
> $$\prod_{n=1}^{\infty}(1-q^n) = \sum_{k=-\infty}^{\infty} (-1)^k q^{k(3k-1)/2}$$
> $$= 1 - q - q^2 + q^5 + q^7 - q^{12} - q^{15} + \cdots$$

The exponents $k(3k-1)/2$ are **generalized pentagonal numbers**.

## Modular Equations

Eta quotients satisfy remarkable identities. For example:
$$\left(\frac{\eta(\tau)}{\eta(2\tau)}\right)^{24} + 16\left(\frac{\eta(2\tau)}{\eta(\tau)}\right)^{24} = \left(\frac{\eta(\tau/2)}{\eta(\tau)}\right)^{24}$$

## Related Concepts

- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]
- [[07 - Modular Forms/Concepts/Partition Function|Partition Function]]
- [[07 - Modular Forms/Concepts/Theta Functions|Theta Functions]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
