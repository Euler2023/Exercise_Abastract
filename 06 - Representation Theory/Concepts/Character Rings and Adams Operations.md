---
title: Character Rings and Adams Operations
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - lambda-rings
created: 2026-09-29
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercises 22-25, printed pp. 726-727, PDF pp. 741-742; Ch. XX, section 3, printed pp. 780-782, PDF pp. 795-797"
source_status: verified-with-corrections
status: not-started
---

# Character Rings and Adams Operations

## Definition

> [!info] The integral character ring
> For a finite group $G$, let $\chi_1,\ldots,\chi_s$ be the irreducible complex characters. The **character ring** is
> $$
> X(G)=\bigoplus_{i=1}^s\mathbb Z\chi_i,
> $$
> with addition and multiplication of functions. Its elements are **virtual characters**. A virtual character is **effective** when all its irreducible coefficients are nonnegative, equivalently when it is the character of an actual finite-dimensional representation.
>
> The character map identifies $X(G)$ with the Grothendieck ring $R(G)=K_0(\operatorname{Rep}^{\mathrm{fd}}_{\mathbb C}(G))$: direct sum gives addition, the diagonal tensor product gives multiplication, and the trivial representation is the unit.

For an actual class $[V]$, define $\lambda^r[V]=[\bigwedge^rV]$ and $\sigma^r[V]=[S^rV]$. Set

$$
\lambda_t(x)=\sum_{r\ge0}\lambda^r(x)t^r,
\qquad \sigma_t(x)=\lambda_{-t}(x)^{-1}.
$$

Exterior decomposition under direct sum gives $\lambda_t(x+y)=\lambda_t(x)\lambda_t(y)$, so this extends to virtual classes by formal division. The **Adams operations**, for $n\ge1$, are

$$
(\Psi^n f)(g)=f(g^n),
\qquad
-t\frac{d}{dt}\log\lambda_{-t}(f)
=\sum_{n\ge1}\Psi^n(f)t^n.
$$

The logarithmic derivative means the quotient of formal derivative by the original series; no analytic logarithm is needed.

## Intuition

A character records the sum of the eigenvalues of each group element. Exterior powers record elementary symmetric functions of those eigenvalues, symmetric powers record complete symmetric functions, and $\Psi^n$ records their $n$-th power sum. Newton identities make these descriptions compatible. Virtual characters allow subtraction, which is essential: Adams operations always preserve the integral ring, but need not preserve actual representations.

## Key Properties

### Series and Newton identities

If $V$ has action $\rho$, evaluating at $g\in G$ gives

$$
\lambda_t([V])(g)=\det(I+\rho(g)t),
\qquad
\sigma_t([V])(g)=\det(I-\rho(g)t)^{-1}.
$$

Thus $\sigma_t(x)\lambda_{-t}(x)=1$ for every virtual class $x$. The corrected derivative and coefficient identities are

$$
\frac{d}{dt}\log\sigma_t(x)
=-\frac{d}{dt}\log\lambda_{-t}(x)
=\sum_{n\ge1}\Psi^n(x)t^{n-1},
$$

$$
n\lambda^n(x)=\sum_{r=1}^n(-1)^{r-1}\Psi^r(x)\lambda^{n-r}(x),
\qquad
n\sigma^n(x)=\sum_{r=1}^n\Psi^r(x)\sigma^{n-r}(x).
$$

In the first Newton identity, the coefficient of $\Psi^n(x)$ is $(-1)^{n-1}$. Solving for it therefore requires no division by $n$ and proves that Adams operations preserve integral virtual characters. Pointwise evaluation then proves

$$
\Psi^n(xy)=\Psi^n(x)\Psi^n(y),\quad
\Psi^n(x+y)=\Psi^n(x)+\Psi^n(y),\quad
\Psi^m\Psi^n=\Psi^{mn},\quad \Psi^1=\mathrm{id}.
$$

### Special lambda identities

The operations also satisfy the unit, multiplication, and iteration identities of a **special $\lambda$-ring**, not just the additive pre-$\lambda$ axioms. The relevant universal integer polynomials are defined by expressing the elementary symmetric functions of $\{X_iY_j\}$ and of $\{\prod_{i\in I}X_i:|I|=n\}$ in the elementary symmetric functions of the original alphabets. They give formulas for $\lambda^r(xy)$ and $\lambda^m(\lambda^n x)$.

An effective way to prove these identities is restriction to all cyclic subgroups. This restriction map is injective because every element lies in a cyclic subgroup. On a cyclic group all representations split into lines, and

$$
\lambda_t\left(\sum_a n_a a\right)=\prod_a(1+at)^{n_a}
$$

for its linear characters $a$. The universal symmetric-polynomial identities prove the formulas for actual representations. In any fixed degree their coefficients are polynomials over $\mathbb Q$ in the integers $n_a$, so agreement for every nonnegative tuple implies agreement for all integer tuples. The group ring has no additive torsion, so equality over $\mathbb Q$ is equality integrally. This proves the identities for virtual representations; restriction injectivity then proves them for $G$. The full argument, including the universal polynomials, is given in the linked Lang XVIII.25 exercise.

### Irreducibility and coprime powers

For $f=\sum_i n_i\chi_i$, orthogonality gives $\langle f,f\rangle=\sum_i n_i^2$. Thus

$$
f\text{ is effective and irreducible}
\quad\Longleftrightarrow\quad
\langle f,f\rangle_G=1\text{ and }f(1)\ge0.
$$

If $\gcd(n,\exp G)=1$, the power map permutes the elements of $G$. It preserves the character norm and the degree, so $\Psi^n$ permutes the irreducible characters. This conclusion fails for general $n$.

## Examples

> [!example] Lines and virtual differences
> For a one-dimensional character $a$, $\lambda_t(a)=1+at$ and $\Psi^n(a)=a^n$. For $a-1$,
> $$
> \lambda_t(a-1)=\frac{1+at}{1+t}
> =1+(a-1)t+(1-a)t^2+(a-1)t^3+\cdots.
> $$
> A virtual element can have nonzero exterior operations in arbitrarily high degrees, even though exterior powers of an actual finite-dimensional representation eventually vanish.

> [!example] An Adams operation that is not effective
> Let $\chi$ be the two-dimensional irreducible character of $S_3$ and $\varepsilon$ its sign character. Their values give
> $$
> \Psi^2\chi=1-\varepsilon+\chi.
> $$
> The negative coefficient shows why a ring operation on virtual characters need not produce an actual representation.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules and Grothendieck Groups]]
- [[02 - Ring Theory/Concepts/Lambda and Gamma Operations|Lambda and Gamma Operations]]
- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials and Newton Identities]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The exercise statements were visually checked at [S2, Ch. XVIII, Exercises 22–25, printed pp. 726–727, PDF pp. 741–742]. Lang's finite-dimensional Grothendieck identification, exterior operations, and Theorem 3.12 were checked at [S2, Ch. XX, §3, printed pp. 780–782, PDF pp. 795–797]. The linked exercise solutions independently prove the displayed character formulas, integrality, the special identities, and the counterexamples.

The formulas above explicitly correct the derivative sign and powers in XVIII.23 and supply the missing coprimality hypothesis for the uniform irreducibility assertion in XVIII.24. The earlier concept on lambda and gamma operations records additive axioms only; the multiplication and iteration assertions here have their separate proof. Fulton–Lang's *Riemann-Roch Algebra* is a reading reference named by Lang XVIII.25, but was not available in the local collection and is not presented as a consulted proof source.
