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
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, §13.9, printed pp. 402–405, PDF pp. 414–417; Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §7, Theorem (7.4) and Exercises 1–3, printed pp. 42–44, PDF pp. 61–63"
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

A generator of the full unit group and a generator of its totally positive subgroup must be distinguished. A **fundamental unit of the full group** is a unit $\eta>1$ in a selected real embedding such that $R^\times=\{\pm\eta^m:m\in\mathbb Z\}$. The subgroup considered next has generator $\eta$ when $N(\eta)=1$, and generator $\eta^2$ when $N(\eta)=-1$.

The units whose two embedded coordinates are positive form a subgroup

$$
 U_0=R^\times \cap\{(u,v):u>0,v>0\}
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

- If a norm-$-1$ unit exists, a fundamental unit $\eta>1$ has norm $-1$, and $U_0=\langle\eta^2\rangle$; geometrically the units then occupy all four quadrants.
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

- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Dirichlet's Unit Theorem and Logarithmic Unit Lattices]]
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

The distinction between a full fundamental unit and the totally positive generator is made explicit for the active Neukirch exercises. Dirichlet's theorem and its proof were checked at [S4, Ch. I, §7, Theorem (7.4), printed p. 42, PDF p. 61]. The least-unit and Pell criterion is proved completely in Exercise R350, and the table in R351. With squarefree radicand $D$ and field discriminant $\Delta$, the full integer-ring criterion uses $x^2-\Delta y^2=\pm4$ and $(x+y\sqrt\Delta)/2$. The equation $x^2-Dy^2=\pm1$ instead concerns the order $\mathbb Z[\sqrt D]$, which may be smaller. Exercise R352 explicitly separates these two orders for $D=13$ and classifies the resulting Pell solutions.
