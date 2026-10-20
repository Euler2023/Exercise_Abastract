---
title: "Dirichlet's Unit Theorem and Logarithmic Unit Lattices"
aliases:
  - Dirichlet Unit Theorem
  - Logarithmic Unit Lattice
  - Trace-Zero Unit Lattice
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - lattices
  - units
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §7, Proposition (7.1) and Theorems (7.3)–(7.4), printed pp. 39–42, PDF pp. 58–61"
source_status: verified
status: not-started
created: 2026-10-20
---

# Dirichlet's Unit Theorem and Logarithmic Unit Lattices

## Definitions

Let $K$ be a number field of degree $n$ and signature $(r,s)$, so $n=r+2s$. Enumerate the real embeddings as $\rho_1,\ldots,\rho_r$ and choose one nonreal embedding $\sigma_j$ from each conjugate pair. Write $\mathcal O_K^\times$ for the unit group and $\mu(K)$ for the roots of unity in $K$.

> [!info] Weighted logarithmic map
> Define
> $$
> \lambda:\mathcal O_K^\times\longrightarrow\mathbb R^{r+s},\qquad
> u\longmapsto
> (\log|\rho_1(u)|,\ldots,\log|\rho_r(u)|,
> 2\log|\sigma_1(u)|,\ldots,2\log|\sigma_s(u)|).
> $$
> Its image lies in the trace-zero hyperplane
> $$
> H=\{x\in\mathbb R^{r+s}:\textstyle\sum_i x_i=0\},
> $$
> because the coordinate sum is $\log|N_{K/\mathbb Q}(u)|=0$ for a unit. The **logarithmic unit lattice** is $\Lambda=\lambda(\mathcal O_K^\times)\subseteq H$.

> [!abstract] Dirichlet's unit theorem, including the lattice form
> The kernel of $\lambda$ is the finite cyclic group $\mu(K)$, and $\Lambda$ is a complete lattice in $H$, of rank $r+s-1$. Consequently there exist units $\varepsilon_1,\ldots,\varepsilon_{r+s-1}$ such that every unit has a unique expression
> $$
> u=\zeta\varepsilon_1^{m_1}\cdots\varepsilon_{r+s-1}^{m_{r+s-1}},
> \qquad \zeta\in\mu(K),\quad m_i\in\mathbb Z.
> $$
> Thus $\mathcal O_K^\times\cong\mu(K)\times\mathbb Z^{r+s-1}$. The lattice form is Theorem (7.3), and the classical group statement is Theorem (7.4) in the source.

## Intuition

Multiplication of units becomes addition of logarithmic vectors. The norm-one condition becomes a single linear equation, so the image lives in a hyperplane. Units can have arbitrarily large or small values under different embeddings, but the product of their absolute values, counting complex pairs twice, stays one.

Completeness means that the logarithmic vectors span the entire hyperplane, with a discrete integer-coordinate structure. It is stronger than merely knowing that the image is an abstract free abelian group of some rank.

## Key Properties and Proof Boundaries

1. **Why complex coordinates have a factor of two.** The absolute field norm is

$$
|N_{K/\mathbb Q}(u)|
=\prod_i|\rho_i(u)|\prod_j|\sigma_j(u)|^2.
$$

Taking logarithms gives precisely the stated coordinate sum. Using one unweighted logarithm per complex pair with the same unweighted hyperplane would be incorrect.

2. **Kernel and roots of unity.** A root of unity has all conjugate absolute values equal to one. Conversely, if $\lambda(u)=0$, all powers $u^m$ are algebraic integers whose embedded coordinates have absolute value one. They lie in a bounded subset of the integer lattice $j(\mathcal O_K)$ in Minkowski space, hence only finitely many powers occur. Two powers coincide, so $u$ is a root of unity. The same bounded-region argument makes the kernel finite. A finite subgroup of $\mathbb C^\times$ is cyclic: if its order is $w$, Lagrange's theorem makes all its members roots of $T^w-1$, and the $w$ distinct complex roots of that polynomial form a cyclic group of order $w$. This is the mechanism in Proposition (7.1).

3. **Full rank is an imported proved theorem.** The assertion that $\Lambda$ is complete, rather than merely discrete, is the substantial part of Theorem (7.3). Its source proof uses Minkowski's lattice point theorem and finiteness of algebraic integers of bounded nonzero norm up to association. This note imports that theorem with its exact signature hypothesis; it does not replace full rank by an unsupported geometric intuition.

4. **From a lattice basis to fundamental units.** Choose a lattice basis $v_1,\ldots,v_t$ of $\Lambda$, $t=r+s-1$, and lifts $\varepsilon_i$ under $\lambda$. For any unit $u$, write $\lambda(u)=\sum_i m_iv_i$ with unique integers $m_i$. Then $u\prod_i\varepsilon_i^{-m_i}$ lies in the kernel, so is a unique $\zeta\in\mu(K)$. This proves the group decomposition from the lattice theorem, including uniqueness.

5. **Actual signs require a separate step.** Logarithms record $|\rho_i(u)|$, not the sign of $\rho_i(u)$. In a totally real field, $u^2$ is totally positive, and its logarithmic vector is $2\lambda(u)$. Thus a construction with strict logarithmic signs can be squared to give strict magnitude inequalities for positive embedding values. The detailed symmetric-cylinder construction is proved in [[04 - Linear Algebra and Modules/Exercises/Exercise LA542 - Prescribed Sizes of Totally Positive Units|Exercise LA542]].

## Examples

> [!example] Real quadratic fields
> Here $(r,s)=(2,0)$, so the rank is one and $\mu(K)=\{\pm1\}$. A fundamental unit $\eta>1$ gives
> $$
> \mathcal O_K^\times=\{\pm\eta^m:m\in\mathbb Z\},\qquad
> \lambda(\eta)=(\log\eta,-\log\eta).
> $$
> This remains true when $N(\eta)=-1$, because the logarithms use absolute values. The generator of the totally positive subgroup is then $\eta^2$, not $\eta$.

> [!example] Rank zero
> For $K=\mathbb Q$, or for an imaginary quadratic field, $r+s-1=0$. The theorem says that all units are roots of unity. For example, the Gaussian-integer norm $a^2+b^2$ gives precisely $\{1,-1,i,-i\}$ in $\mathbb Q(i)$.

> [!example] A fundamental unit of norm minus one
> In $\mathbb Q(\sqrt5)$, $\eta=(1+\sqrt5)/2$ has norm $-1$ and is a fundamental unit. Its square generates the totally positive subgroup. The complete minimality check is given in [[02 - Ring Theory/Exercises/Exercise R351 - A Table of Real Quadratic Fundamental Units|Exercise R351]]; logarithms alone would not distinguish these two generators.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Units in Real Quadratic Fields]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

- Proposition (7.1), printed pp. 39–40 / PDF pp. 58–59, proves the kernel statement. Theorem (7.3), printed pp. 40–42 / PDF pp. 59–61, proves the complete-lattice statement. Theorem (7.4), printed p. 42 / PDF p. 61, proves the classical decomposition. These bounded original pages were rendered and visually checked.
- The factor $2$ in a chosen complex coordinate matches the identification of the pair of logarithms with their sum. The source uses this identification in §5 and §7; it is also derived here from the field-norm formula.
- The statements about full rank are source-proved inputs. The kernel explanation, basis-lifting deduction, examples, and warning about signs above make the proof scope explicit. The independent active-exercise solutions prove the Pell minimality and the required positive-sign construction.
