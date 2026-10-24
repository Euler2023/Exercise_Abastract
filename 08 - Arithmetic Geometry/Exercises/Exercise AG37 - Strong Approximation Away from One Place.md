---
title: 'Exercise AG37: Strong Approximation Away from One Place'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 1, printed p. 193, PDF p. 212
source_refs:
- S4/ch-III/sec-1/ex-1
created: '2026-10-23'
---

# Exercise AG37: Strong Approximation Away from One Place

## Problem Statement

> [!question] Neukirch III.1.1
> Let $S$ be a finite set of primes and let $\mathfrak p_0$ be another prime of $K$ which does not belong to $S$. Let $a_{\mathfrak p}\in K$ be given numbers, for $\mathfrak p\in S$. Then for every $\varepsilon>0$, there exists an $x\in K$ such that
> $$
> |x-a_{\mathfrak p}|_{\mathfrak p}<\varepsilon\text{ for }\mathfrak p\in S,\qquad |x|_{\mathfrak p}\le1\text{ for }\mathfrak p\notin S\cup\{\mathfrak p_0\}.
> $$

## Hints

> [!hint]- Hint 1
> First use the Chinese remainder theorem at the finite places to express the allowed $x$ as a coset of a fractional ideal. The remaining problem is inhomogeneous lattice approximation at infinity: if the exceptional place is finite, enlarge its allowed denominators; if it is infinite, relax that coordinate.

> [!hint]- Hint 2
> A uniform bound on the lattice covering radius is needed. Write the fractional ideal as $(\alpha)\mathfrak a_i$, where $\mathfrak a_i$ runs through finitely many ideal-class representatives, and use the logarithmic unit lattice to balance the scaling at the infinite coordinates.

> [!hint]- Hint 3
> After scaling the infinite coordinates by positive factors $c_{\mathfrak p}$, the lattice covering radius is at most $C(\mathfrak N(\mathfrak a)\prod_{\mathfrak p\mid\infty}c_{\mathfrak p}^{f_{\mathfrak p}})^{1/n}$. Make the quantity in parentheses tend to zero so that every target vector is arbitrarily close to a lattice point.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Put $n=[K:\mathbb Q]$, $V=\prod_{\mathfrak p\mid\infty}K_{\mathfrak p}$, and $f_{\mathfrak p}=[K_{\mathfrak p}:\mathbb R]\in\{1,2\}$. At a complex place, the book's normalized absolute value is the square of the usual complex modulus; the Euclidean coordinates below use the usual real absolute value or complex modulus. We use finiteness of the ideal class group and Dirichlet's unit-lattice theorem. These inputs and their combination are explicitly stated in [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, (1.11)–(1.12), printed p. 191, PDF p. 210]. Strong approximation itself is not used as an input.
>
> **1. The required inhomogeneous lattice covering bound.** For a nonzero fractional ideal $\mathfrak a$ and positive numbers $c_{\mathfrak p}$, put
> $$
> \Lambda=\operatorname{diag}(c_{\mathfrak p})j(\mathfrak a),\qquad M=\mathfrak N(\mathfrak a)\prod_{\mathfrak p\mid\infty}c_{\mathfrak p}^{f_{\mathfrak p}}.
> $$
> There is a constant $C$ depending only on $K$ such that every point of $V$ is at Euclidean distance at most $CM^{1/n}$ from $\Lambda$. To prove this, choose finitely many fractional ideal-class representatives $\mathfrak a_i$ and write $\mathfrak a=\alpha\mathfrak a_i$. Let $d_{\mathfrak p}$ be the modulus of multiplication by $c_{\mathfrak p}\alpha$; its sign or phase is an orthogonal transformation and does not affect distances. Moreover,
> $$
> \prod_{\mathfrak p\mid\infty}d_{\mathfrak p}^{f_{\mathfrak p}}=M/\mathfrak N(\mathfrak a_i).
> $$
> Put $t=n^{-1}\log(M/\mathfrak N(\mathfrak a_i))$. The vector $(\log d_{\mathfrak p}-t)_{\mathfrak p}$ lies in the hyperplane with weighted sum zero. The logarithms of units form a full lattice in this hyperplane. Thus a unit $u$ can be chosen so that all $\log d_{\mathfrak p}+\log|u|_{\mathfrak p,\mathrm{usual}}-t$ lie in a fixed bounded fundamental domain. Since $u\mathfrak a_i=\mathfrak a_i$, this does not change $\Lambda$. Consequently, $\Lambda$ is the image of a fixed lattice $j(\mathfrak a_i)$ under a real linear map of operator norm at most $C_iM^{1/n}$. A bounded parallelepiped for a fixed lattice gives a finite covering radius. Taking the maximum over the finitely many $i$ proves the bound. This argument also applies when there is just one infinite place and the unit lattice has rank zero.
>
> **2. Arrange the finite-place conditions.** Write $S_f=\{\mathfrak p\in S:\mathfrak p\nmid\infty\}$. Choose integers $m_{\mathfrak p}$ large enough that $\mathfrak N(\mathfrak p)^{-m_{\mathfrak p}}<\varepsilon$. Choose a fractional ideal $\mathfrak b$ whose exponent at each place of $S_f$ satisfies $r_{\mathfrak p}\le\min(0,v_{\mathfrak p}(a_{\mathfrak p}))$ and whose exponents at all other finite places are zero. The Chinese remainder theorem for fractional ideals gives $b\in\mathfrak b$ satisfying
> $$
> v_{\mathfrak p}(b-a_{\mathfrak p})\ge m_{\mathfrak p}\quad(\mathfrak p\in S_f).
> $$
> Here the targets are first regarded as residue classes in $\mathfrak b\mathcal O_{K,\mathfrak p}$, after which the Chinese remainder theorem applies to relatively prime ideals. These local residue classes are represented by elements of $\mathfrak b$ because their denominators are invertible at that prime. Put
> $$
> \mathfrak a=\prod_{\mathfrak p\in S_f}\mathfrak p^{m_{\mathfrak p}}.
> $$
> If the exceptional place $\mathfrak p_0$ is finite, every $x\in b+\mathfrak a\mathfrak p_0^{-N}$ preserves these approximations and is integral at the finite places outside $S_f\cup\{\mathfrak p_0\}$. If the exceptional place is infinite, use $b+\mathfrak a$.
>
> **3. Arrange the infinite-place conditions.** For $\mathfrak p\in S\cap\{\mathfrak p\mid\infty\}$, take target coordinate $a_{\mathfrak p}$ and choose a usual-modulus error $\delta_{\mathfrak p}>0$ with $\delta_{\mathfrak p}^{f_{\mathfrak p}}<\varepsilon$. At the other constrained infinite places, take target 0 and error 1. Scale these coordinates by $c_{\mathfrak p}=\delta_{\mathfrak p}^{-1}$.
>
> If $\mathfrak p_0$ is finite, treat all infinite coordinates in this way. The scaling quantity for the lattice $j(\mathfrak a\mathfrak p_0^{-N})$ is
> $$
> M_N=\mathfrak N(\mathfrak a)\mathfrak N(\mathfrak p_0)^{-N}\prod_{\mathfrak p\mid\infty}c_{\mathfrak p}^{f_{\mathfrak p}}\longrightarrow0.
> $$
> The covering bound makes the distance from the target vector minus $j(b)$ to this scaled lattice less than 1, producing a coset element satisfying every strict error bound at infinity.
>
> If $\mathfrak p_0$ is infinite, set $c_{\mathfrak p_0}=T^{-1}$ at that coordinate and take target 0. Then $M_T$ contains the factor $T^{-f_{\mathfrak p_0}}$ and again tends to zero. The covering bound gives $x\in b+\mathfrak a$ meeting the conditions at every constrained infinite coordinate, while the $\mathfrak p_0$ coordinate is allowed to grow with $T$.
>
> In either case, the finite-place inequalities $|x-a_{\mathfrak p}|_{\mathfrak p}<\varepsilon$ hold, and $|x|_{\mathfrak p}\le1$ at the other nonexceptional finite places. Each infinite-place condition also holds, proving the assertion.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Dirichlet Unit Lattices]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 1, printed p. 193, PDF p. 212]. The statement was checked against the original page images and is posed as an exercise in the book. The proof above is independently derived, including a proof of the lattice covering bound. Its inputs are only finiteness of the ideal class group, the unit-lattice theorem, the Chinese remainder theorem, and the Minkowski-lattice interpretation of fractional ideals.
- **Boundary:** The exceptional place cannot be omitted. For example, when $K=\mathbb Q$, requiring $|x|_p\le1$ at all places leaves only finitely many possible integers, so arbitrary approximation fails. The unconstrained coordinate is precisely what lets the volume in the covering bound tend to zero.
