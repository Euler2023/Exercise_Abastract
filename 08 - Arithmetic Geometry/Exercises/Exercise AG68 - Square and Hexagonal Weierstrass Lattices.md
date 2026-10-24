---
title: "Exercise AG68: Square and Hexagonal Weierstrass Lattices"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.4, Exercise 1.4.3, printed pp. 36–37, PDF pp. 51–52"
source_refs:
  - "S7/ch-1/sec-4/ex-3"
created: 2026-10-24
---

# Exercise AG68: Square and Hexagonal Weierstrass Lattices

## Problem Statement

> [!question] Original Exercise 1.4.3
> Let $\Lambda=\Lambda_i$. The derivative $\wp'$ of the corresponding Weierstrass function has a triple pole at $0$ and simple zeros at $1/2$, $i/2$, $(1+i)/2$. Since $i\Lambda=\Lambda$ it follows that
> $$
> \wp(iz)=\wp_{i\Lambda}(iz)=i^{-2}\wp(z)=-\wp(z).
> $$
> Show that in particular $\wp((1+i)/2)=0$. This is a double zero of $\wp$ since also $\wp'((1+i)/2)=0$, making it the only zero of $\wp$ as a function on $\mathbb C/\Lambda$. Since $\overline\Lambda=\Lambda$ (complex conjugation) it also follows that $\wp(\overline z)=\overline{\wp(z)}$, so that $\wp(1/2)$ is real, as is $\wp(i/2)=-\wp(1/2)$. Compute some dominant terms of $\wp(1/2)$ and $\wp(i/2)$ to show that $\wp(1/2)$ is the positive value. For what $m$ does the complex torus $\mathbb C/m\Lambda$ correspond to the elliptic curve with equation $y^2=4x(x-1)(x+1)$?
>
> Reason similarly with $\Lambda=\Lambda_{\mu_3}$ to find the zeros of the corresponding Weierstrass function $\wp$ and to show that $\wp(1/2)$ is real. For what $m$ does the complex torus $\mathbb C/m\Lambda$ correspond to the elliptic curve with equation $y^2=4(x-1)(x-\mu_3)(x-\mu_3^2)$? (A hint for this exercise is at the end of the book.)
>
> Here $\Lambda_\tau=\tau\mathbb Z\oplus\mathbb Z$ and $\mu_3=e^{2\pi i/3}$ denotes a specified cube root, not the whole group of cube roots.

## Hints

> [!hint]- Hint 1
> Scaling the defining series gives $\wp_{m\Lambda}(mz)=m^{-2}\wp_\Lambda(z)$. Conjugating it gives $\wp_{\overline\Lambda}(\overline z)=\overline{\wp_\Lambda(z)}$.

> [!hint]- Hint 2
> For the square lattice, $i(1+i)/2$ and $(1+i)/2$ differ by a period. To determine the sign of the half-period value, group the defining series into horizontal lattice rows and differentiate the partial fraction formula for $\pi\cot\pi z$.

> [!hint]- Hint 3 — source appendix
> For $\rho=\mu_3$, the identities are $\wp(\rho z)=\rho\wp(z)$ and $\wp(\overline z)=\overline{\wp(z)}$. The appendix identifies the two zero classes as $(1+2\rho)/3$ and $(2+\rho)/3$ [Appendix A, printed p. 414 / PDF p. 425]. Check them directly using multiplication by $\rho$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> We use the following source results with their exact scope. Proposition 1.4.1(c), printed pp. 32–33 / PDF pp. 47–48, gives
> $$
> (\wp')^2=4\wp^3-g_2(\Lambda)\wp-g_3(\Lambda)
> =4(\wp-e_1)(\wp-e_2)(\wp-e_3),
> $$
> where the three distinct values $e_j$ are the values of $\wp$ at the three nonzero two-torsion points. The assigned Exercise 1.4.1, proved in [[08 - Arithmetic Geometry/Exercises/Exercise AG66 - Zeros Poles and Residues of Elliptic Functions|AG66]], shows that $\wp$ has two zeros counting multiplicity, because it has one double pole. Its periodicity and evenness are proved in [[08 - Arithmetic Geometry/Exercises/Exercise AG67 - Periodicity of the Weierstrass Function|AG67]].
>
> **Scaling and conjugation.** In the absolutely convergent defining sum, put $\omega'=m\omega$. Each squared denominator acquires a factor $m^2$, so
> $$
> \wp_{m\Lambda}(mz)=m^{-2}\wp_\Lambda(z).
> $$
> Conjugating each summand likewise gives $\wp_{\overline\Lambda}(\overline z)=\overline{\wp_\Lambda(z)}$. The same reindexing of the lattice Eisenstein series gives
> $$
> g_2(m\Lambda)=m^{-4}g_2(\Lambda),\qquad
> g_3(m\Lambda)=m^{-6}g_3(\Lambda).
> $$
>
> **The square lattice: its zero.** Since $i\Lambda_i=\Lambda_i$, scaling gives $\wp(iz)=-\wp(z)$. Put $z_0=(1+i)/2$. Then $iz_0=z_0-1$, so periodicity yields $\wp(iz_0)=\wp(z_0)$. Hence $\wp(z_0)=0$. Evenness makes $\wp'$ odd; since $-z_0\equiv z_0\pmod\Lambda$, it follows that $\wp'(z_0)=0$. Thus $z_0$ is a zero of order at least two. The total zero multiplicity is two, so this is the unique zero class and has order exactly two.
>
> Conjugation preserves $\Lambda_i$, and therefore $a=\wp(1/2)$ is real. Scaling gives $\wp(i/2)=-a$. The half-period values are consequently $a,-a,0$, with $a\ne0$ because they are distinct.
>
> **The square lattice: a rigorous dominant-term sign calculation.** Differentiating the first partial fraction formula (1.1) on printed p. 5 / PDF p. 20 gives
> $$
> \sum_{r\in\mathbb Z}\frac1{(z-r)^2}=\pi^2\csc^2(\pi z),\qquad z\notin\mathbb Z.
> $$
> The identity extends from the upper half plane to its meromorphic domain by analytic continuation. The constant term at $z=0$ gives $\sum_{r\ne0}r^{-2}=\pi^2/3$. Absolute convergence of the corrected two-dimensional $\wp$ series permits grouping it by rows $r+ni$. The row $n=0$ and the paired rows $n,-n$ give
> $$
> \begin{aligned}
> \wp_i(z)
> &=\pi^2\csc^2(\pi z)-\frac{\pi^2}{3}\\
> &\quad+\pi^2\sum_{n\ne0}\left[\csc^2\!\bigl(\pi(z-ni)\bigr)-\csc^2(\pi ni)\right].
> \end{aligned}
> $$
> At $z=1/2$, $\sin(\pi/2-\pi ni)=\cosh(\pi n)$ and $\sin(\pi ni)=i\sinh(\pi n)$. Thus
> $$
> a=\frac{2\pi^2}{3}
> +2\pi^2\sum_{n=1}^\infty
> \left[\operatorname{sech}^2(\pi n)+\operatorname{csch}^2(\pi n)\right]
> >\frac{2\pi^2}{3}>0.
> $$
> This displays the dominant row term $2\pi^2/3$, the first correction $2\pi^2(\operatorname{sech}^2\pi+\operatorname{csch}^2\pi)$, and an entirely positive remaining tail. Its convergence follows from exponential decay of the hyperbolic terms. The corresponding expansion for $\wp(i/2)$ is its negative, so the sign assertion has no numerical error estimate left unresolved.
>
> **The square lattice: normalization.** Its cubic is
> $$
> y^2=4x(x-a)(x+a)=4x^3-4a^2x.
> $$
> After replacing the lattice by $m\Lambda_i$, the half-period roots become $m^{-2}a,-m^{-2}a,0$. Choosing $m=\sqrt a>0$ gives exactly $0,1,-1$ and hence $y^2=4x(x-1)(x+1)$. All valid multipliers satisfy $m^4=a^2$, namely $m\in\{\pm\sqrt a,\pm i\sqrt a\}$. They yield the same scaled lattice because $i\Lambda_i=\Lambda_i$.
>
> **The hexagonal lattice: its two zeros.** Write $\rho=\mu_3$, so $1+\rho+\rho^2=0$ and $\rho^3=1$. Since $\rho\Lambda_\rho=\Lambda_\rho$,
> $$
> \wp(\rho z)=\rho^{-2}\wp(z)=\rho\wp(z).
> $$
> Define
> $$
> u=\frac{1+2\rho}{3},\qquad v=\frac{2+\rho}{3}.
> $$
> Neither lies in $\Lambda_\rho$. Direct calculation gives
> $$
> (\rho-1)u=-1-\rho\in\Lambda_\rho,
> \qquad (\rho-1)v=-1\in\Lambda_\rho.
> $$
> Consequently periodicity and the scaling identity give $\wp(u)=\wp(\rho u)=\rho\wp(u)$, forcing $\wp(u)=0$, and similarly $\wp(v)=0$. Their sum is $1+\rho\in\Lambda_\rho$, and their difference $(\rho-1)/3$ is not in the lattice, so they are two distinct opposite classes. Total zero multiplicity two shows that both zeros are simple and that there are no others.
>
> **The hexagonal lattice: real half-period and normalization.** Conjugation preserves the lattice, because $\overline\rho=\rho^2=-1-\rho$. Therefore $b=\wp_\rho(1/2)$ is real. The three nonzero two-torsion values are
> $$
> \wp(1/2)=b,\qquad \wp(\rho/2)=\rho b,
> \qquad \wp((1+\rho)/2)=\rho^2 b.
> $$
> For the last equality, use $\rho^2/2=-(1+\rho)/2$ and evenness. These values are distinct, so $b\ne0$. Their cubic is
> $$
> y^2=4(x-b)(x-\rho b)(x-\rho^2b)=4(x^3-b^3).
> $$
> Choose any complex square root $m$ of $b$. Then the scaled roots are $1,\rho,\rho^2$ and the target equation is $y^2=4(x-1)(x-\rho)(x-\rho^2)$. More generally all valid multipliers satisfy $m^6=b^3$. Multiplication of any such $m$ by a sixth root of unity preserves the resulting lattice, because the units $\{\pm1,\pm\rho,\pm\rho^2\}$ preserve $\Lambda_\rho$. No positivity assertion for $b$ is needed to select a complex square root.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Weierstrass Elliptic Functions|Weierstrass Elliptic Functions]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]

## Notes

- **Source status:** The complete statement was visually checked at [Diamond–Shurman, Ch. 1, §1.4, printed pp. 36–37, PDF pp. 51–52]; the appendix hint at [Appendix A, printed p. 414, PDF p. 425]. The normalization and scaling context were checked at [printed pp. 32–35, PDF pp. 47–50]. The row-sum identity uses formula (1.1), visually checked at [§1.1, printed p. 5, PDF p. 20]. All assigned deductions are independently derived above.
- **Imported source result:** Proposition 1.4.1 gives the cubic relation and distinct half-period values; the source proof uses the degree-two property of $\wp$. AG66 proves that degree property directly, so no converse uniformization theorem is used here.
- **Verification:** The sign of the square-lattice value follows from an exact positive series, rather than a finite floating-point sample. The zeros of the hexagonal function are checked by explicit lattice congruences.
- **Normalization:** Scaling a lattice by $m$ scales $\wp$ values by $m^{-2}$ and its cubic coefficients by $m^{-4},m^{-6}$. The multiplier needed here is a square root of the chosen half-period value, not its reciprocal.
