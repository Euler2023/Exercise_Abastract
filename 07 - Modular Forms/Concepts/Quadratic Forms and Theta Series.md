---
title: Quadratic Forms and Theta Series
aliases:
  - Integral Quadratic Forms and Theta Series
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
  - number-theory
created: 2026-01-19
source: "Serge Lang, Algebraic Number Theory, 2nd ed., Ch. XIII, §2, printed pp. 251–253, PDF pp. 254–256; Jürgen Neukirch, Algebraic Number Theory, Ch. VII, §3, printed pp. 443–452, PDF pp. 462–471"
source_status: partially-verified
status: not-started
---

# Quadratic Forms and Theta Series

This note concerns the arithmetic specialization of quadratic forms to positive-definite integral forms and their theta series. For quadratic forms over a field, matrix congruence, signatures, and real quadrics, see [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]].

## Quadratic Forms

> [!info] Definition (Positive-definite integral form)
> Let $L\cong\mathbb Z^n$ be a lattice. A **positive-definite integral quadratic form** is a map $Q:L\to\mathbb Z$ whose scalar extension to $L\otimes\mathbb R$ is positive definite and whose polar form
>
> $$
> B_Q(x,y)=Q(x+y)-Q(x)-Q(y)
> $$
>
> is bilinear. In coordinates, $Q(x)=\tfrac12x^{\mathsf T}Bx$ for an integral symmetric matrix $B$ with even diagonal.

## Theta Series of Quadratic Forms

> [!info] Definition (Theta Series)
> For such a form $Q$ of rank $n$, put $q=e^{2\pi i\tau}$ and define
>
> $$
> \Theta_Q(\tau)=\sum_{x\in L}q^{Q(x)}
> =\sum_{k=0}^{\infty}r_Q(k)q^k,
> $$
>
> where $r_Q(k)$ counts the number of representations of $k$ by $Q$.

## Modularity

> [!abstract] Theta-series modularity (external standard input)
> Let $B$ be the even integral Gram matrix above, and let $N$ be the smallest positive integer for which $NB^{-1}$ is even integral. Then $\Theta_Q$ transforms as a modular form of weight $n/2$ on a congruence subgroup of level dividing a conventional multiple of $N$, with a multiplier or Dirichlet character determined by the discriminant data. For even $n$, this is commonly expressed, under the standard level convention, as
>
> $$
> \Theta_Q\in M_{n/2}(\Gamma_0(N),\chi_Q).
> $$

The half-integral-weight case requires the metaplectic multiplier and should not be read as an ordinary integral-weight statement.

## Classical Examples

### Sums of Squares

> [!example] Two squares: $Q(x,y) = x^2 + y^2$
>
> $$
> \Theta_Q(\tau)=\theta(\tau)^2=\sum_{n\geq0}r_2(n)q^n,
> $$
>
> where $r_2(n) = 4(d_1(n) - d_3(n))$.

> [!example] Four squares: $Q = x_1^2 + x_2^2 + x_3^2 + x_4^2$
>
> $$
> r_4(n)=8\sum_{\substack{d\mid n\\4\nmid d}}d,
> $$
>
> proving **Lagrange's theorem**: every positive integer is a sum of four squares.

> [!example] Eight squares
>
> $$
> r_8(n)=16\sum_{d\mid n}(-1)^{n+d}d^3.
> $$

## Representation Numbers

The representation number $r_Q(n)$ can often be studied using modular forms, [[07 - Modular Forms/Concepts/Hecke Operators|Hecke operators]], and genus averages.

## Siegel-Weil Formula

> [!abstract] Siegel's genus-average theorem (external standard input)
> After using the standard mass normalization, the weighted average of theta series in a genus is an [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein series]]. The precise constant and local-density factors depend on the normalization and are not proved in this note.

## Root Lattices

| Lattice | Rank | Theta series |
|---------|------|--------------|
| $A_1$ | 1 | $\theta(\tau)$ |
| $D_4$ | 4 | $\theta^4 + \theta_2^4$ |
| $E_8$ | 8 | $E_4(\tau)$ |
| Leech | 24 | Its theta series is a weight-$12$ modular form |

> [!example] Example: $E_8$ lattice
> With the normalization $Q(x)=(x,x)/2$, the theta series of the $E_8$ root lattice is $E_4(\tau)$.

## Binary Forms

For binary forms $Q(x,y) = ax^2 + bxy + cy^2$ of discriminant $D = b^2 - 4ac < 0$:
- the theta series has weight $1$ with an appropriate level and character;
- genus or class averages are related to class numbers and Eisenstein series.

## Universality Criteria

> [!abstract] Theorem (Conway-Schneeberger)
> A positive definite quadratic form represents all positive integers if and only if it represents 1, 2, 3, 5, 6, 7, 10, 14, 15.

The Bhargava–Hanke 290-theorem and later odd-universality criteria are not stated here: their exact test sets and hypotheses require an external source audit and should not be conflated.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[07 - Modular Forms/Concepts/Theta Functions|Theta Functions]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- Lang applies Poisson summation to the exponential of a positive-definite quadratic form and proves Hecke's theta formula. Neukirch defines theta series for complete lattices and proves the general theta transformation formula on the relevant upper half-space. These sources verify the lattice-series construction and analytic transformation mechanism.
- The precise congruence subgroup, level, character, Siegel genus-average formula, root-lattice identities, representation-number formulas, and universality criteria remain **external inputs** here. The previous heading incorrectly advertised the 290-theorem while stating a different odd-universality criterion; that unsupported conflation has been removed.
- Artin's real quadratic forms and quadrics are handled separately in [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]].
