---
title: Eta Function
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
created: 2026-01-19
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, §1.2, Prop. 1.2.5, printed p. 20, PDF p. 35; Serge Lang, Algebra, Ch. VI, §15, printed pp. 317–318, PDF pp. 332–333"
source_status: partially-verified
status: not-started
---

# Eta Function

## Definition

> [!info] Definition (Dedekind Eta Function)
> The **Dedekind eta function** is:
> $$
> \eta(\tau) = q^{1/24} \prod_{n=1}^{\infty} (1 - q^n) = q^{1/24} \sum_{n=-\infty}^{\infty} (-1)^n q^{n(3n-1)/2}
> $$
> where $q = e^{2\pi i \tau}$.

The second expression is the **pentagonal number theorem**.

## Key Properties

1. $\eta(\tau) \neq 0$ for all $\tau \in \mathbb{H}$
2. $\eta(\tau + 1) = e^{\pi i/12} \eta(\tau)$
3. $\eta(-1/\tau) = \sqrt{-i\tau} \cdot \eta(\tau)$
4. $\eta^{24} = \Delta_{\mathrm{norm}}$, where $\Delta_{\mathrm{norm}}=q\prod_{n\geq1}(1-q^n)^{24}$ is the normalized [[07 - Modular Forms/Concepts/Discriminant Function|discriminant cusp form]].

> [!warning] Normalization
> Diamond–Shurman use an elliptic-discriminant normalization satisfying $\Delta=(2\pi)^{12}\eta^{24}$, whereas this vault uses the normalized cusp form $\Delta_{\mathrm{norm}}=\eta^{24}$. The two formulas are compatible after fixing notation.

## Transformation Law

> [!abstract] Theorem (Full Transformation)
> For $\gamma = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \text{SL}_2(\mathbb{Z})$ with $c > 0$:
> $$
> \eta(\gamma \tau) = \varepsilon(a,b,c,d) \sqrt{c\tau + d} \cdot \eta(\tau)
> $$
> where $\varepsilon$ is a 24th root of unity (Dedekind sum).

## Dedekind Sum

> [!info] Definition
> The **Dedekind sum** is:
> $$
> s(d,c)=\sum_{r=1}^{c-1}\left(\!\left(\frac rc\right)\!\right)
> \left(\!\left(\frac{dr}{c}\right)\!\right),
> $$
> where $((x))=x-\lfloor x\rfloor-\tfrac12$ for $x\notin\mathbb Z$ and $((x))=0$ for $x\in\mathbb Z$.
>
> The multiplier $\varepsilon$ involves $e^{\pi i s(d,c)}$.

## Connection to Partition Function

> [!abstract] Theorem
> $$
> \frac{1}{\eta(\tau)} = q^{-1/24} \sum_{n=0}^{\infty} p(n) q^n
> $$
> where $p(n)$ is the [[07 - Modular Forms/Concepts/Partition Function|partition function]].

## Eta Products

> [!info] Definition (Eta Product)
> An **eta product** is a function of the form:
> $$
> f(\tau) = \prod_{d | N} \eta(d\tau)^{r_d}
> $$
> where $r_d \in \mathbb{Z}$.

> [!warning] External criterion
> Precise eta-quotient modularity criteria require congruences involving both $\sum_{d\mid N}d,r_d$ and $\sum_{d\mid N}(N/d)r_d$, an integral weight $\frac12\sum r_d$, a character, and nonnegative orders at every cusp. The former abbreviated “Ligozat theorem” omitted essential hypotheses and has therefore been removed pending a dedicated source.

## Examples

> [!example] Example 1: Discriminant
> $$
> \Delta(\tau) = \eta(\tau)^{24} = q \prod_{n=1}^{\infty}(1-q^n)^{24}
> $$

> [!example] Example 2: Weight 1/2 form
> $\eta(\tau)$ itself is a modular form of weight $1/2$ for a metaplectic double cover.

> [!example] Example 3: Euler's product
> $$
> \eta(\tau) = q^{1/24}(1-q)(1-q^2)(1-q^3)\cdots
> $$

> [!example] Example 4: Generating function
> $$
> \frac{1}{\eta(24\tau)} = \sum_{n=0}^{\infty} p(n) q^{24n-1}
> $$

## Pentagonal Number Theorem

> [!abstract] Theorem (Euler)
> $$
> \prod_{n=1}^{\infty}(1-q^n) = \sum_{k=-\infty}^{\infty} (-1)^k q^{k(3k-1)/2}
> $$
> $$
> = 1 - q - q^2 + q^5 + q^7 - q^{12} - q^{15} + \cdots
> $$

The exponents $k(3k-1)/2$ are **generalized pentagonal numbers**.

## Related Concepts

- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]
- [[07 - Modular Forms/Concepts/Partition Function|Partition Function]]
- [[07 - Modular Forms/Concepts/Theta Functions|Theta Functions]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Eight-source audit: Diamond–Shurman define the infinite product for $\eta$, prove $\eta(-1/\tau)=\sqrt{-i\tau}\,\eta(\tau)$, and deduce that $\eta^{24}$ is a weight-$12$ cusp form; their displayed discriminant uses the factor $(2\pi)^{12}$ [S7, §1.2, Prop. 1.2.5, printed p. 20, PDF p. 35]. Lang independently verifies the normalized product $q\prod_{n\ge1}(1-q^n)^{24}$ [S2, Ch. VI, §15, printed pp. 317–318, PDF pp. 332–333]. The translation formula follows directly from the defining product. The full multiplier formula, Dedekind-sum derivation, pentagonal-number theorem, partition identity, and eta-quotient criteria are not proved in the checked slices. The note is therefore `partially-verified`.
