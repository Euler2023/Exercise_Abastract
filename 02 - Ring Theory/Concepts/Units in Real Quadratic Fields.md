---
title: Units in Real Quadratic Fields
aliases:
  - Real Quadratic Units
  - Pell Units
  - Fundamental Units
topic: ring-theory
tags:
  - concept
  - ring-theory
  - quadratic-fields
  - units
created: 2026-08-28
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, §13.9, printed pp. 402–405, PDF pp. 414–417"
source_status: verified
status: not-started
---

# Units in Real Quadratic Fields

## Definition

Let $K=\mathbb Q(\sqrt d)$ be a real quadratic field and let $R=\mathcal O_K$. Its two real embeddings send

$$
\alpha=a+b\sqrt d
$$

to

$$
u=a+b\sqrt d,
\qquad
v=a-b\sqrt d.
$$

Their product is the norm $N(\alpha)=uv$. An algebraic integer is a unit exactly when $N(\alpha)=\pm1$, so the embedded units are precisely the lattice points of $R$ lying on the hyperbolas $uv=1$ and $uv=-1$.

## Fundamental Unit

The units whose two embedded coordinates are positive form a subgroup

$$
U_0=R^\times\cap\{(u,v):u>0, v>0}.
$$

This subgroup is infinite cyclic. If $\varepsilon>1$ is the unit in $U_0$ with smallest first coordinate greater than $1$, then

$$
U_0=\langle\varepsilon\rangle.
$$

The proof combines two facts: bounded regions contain only finitely many lattice points, and every positive unit can be divided by a suitable power of $\varepsilon$ into the interval $[1,\varepsilon)$.

## Key Properties

- The only roots of unity in a real quadratic field are $\pm1$.
- Abstractly,

$$
R^\times\cong C_2\times\mathbb Z.
$$

- If a unit of norm $-1$ exists, its square generates a finite-index subgroup of $U_0$; geometrically the units then occupy all four quadrants.
- If no norm-$-1$ unit exists, every unit lies in the first or third quadrant.
- Integer solutions of Pell's equation $x^2-dy^2=1$ correspond to norm-one units $x+y\sqrt d$ in $\mathbb Z[\sqrt d]$.

## Examples

For $d=2$,

$$
1+\sqrt2
$$

has norm $-1$, while $(1+\sqrt2)^2=3+2\sqrt2$ generates the first-quadrant subgroup.

For $d=3$,

$$
2+\sqrt3
$$

generates the first-quadrant subgroup. For $d=5$, with $\eta=(1+\sqrt5)/2$, the generator is

$$
\eta^2=\frac{3+\sqrt5}{2}.
$$

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The two-embedding model, norm hyperbolas, and infinitude of units were checked against [S1, Ch. 13, §13.9, printed pp. 402–405, PDF pp. 414–417]. The cyclic description and examples are independent expansions of the exercise-level consequences.
