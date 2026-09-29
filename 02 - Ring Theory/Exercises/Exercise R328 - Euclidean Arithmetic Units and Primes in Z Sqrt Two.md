---
title: "Exercise R328: Euclidean Arithmetic Units and Primes in Z Sqrt Two"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §1, Exercise 7, printed p. 5, PDF p. 24"
created: 2026-09-29
---

# Exercise R328: Euclidean Arithmetic Units and Primes in Z Sqrt Two

## Problem Statement

> [!question] Neukirch I.1.7
> Show that the ring $\mathbb Z[\sqrt2]=\mathbb Z+\mathbb Z\sqrt2$ is euclidean. Show furthermore that its units are given by $\pm(1+\sqrt2)^n$, $n\in\mathbb Z$, and determine its prime elements.

## Hints

> [!hint]- Hint 1
> The norm $N(a+b\sqrt2)=a^2-2b^2$ can be negative. Use its absolute value as the Euclidean function, and round both coefficients of $\alpha/\beta\in\mathbb Q(\sqrt2)$ to nearest integers.

> [!hint]- Hint 2
> Put $\varepsilon=1+\sqrt2$. Multiply a positive unit by a power of $\varepsilon$ to move it into $[1,\varepsilon)$. Its conjugate has absolute value equal to its reciprocal, which bounds the coefficient of $\sqrt2$.

> [!hint]- Hint 3
> For a rational prime $p$, identify $R/(p)$ with $\mathbb F_p[X]/(X^2-2)$. When $t^2\equiv2\pmod p$ and $p$ is odd, the ideal $(p,\sqrt2-t)$ is principal and has quotient $\mathbb F_p$. Finally show that every prime element divides some rational prime.

## Solution

> [!success]- Independent derivation
> Write $R=\mathbb Z[\sqrt2]$, use conjugation $\overline{a+b\sqrt2}=a-b\sqrt2$, and put
>
> $$
> N(a+b\sqrt2)=a^2-2b^2,
> \qquad
> \phi(\alpha)=\lvert N(\alpha)\rvert\quad(\alpha\neq0).
> $$
>
> Irrationality of $\sqrt2$ shows that $\phi(\alpha)$ is a positive integer. Norms are multiplicative. An element is a unit if and only if its norm is $1$ or $-1$: one implication follows by taking norms of an inverse, and the converse follows from $\alpha^{-1}=\overline\alpha/N(\alpha)$.
>
> **1. Euclidean division.** Given $\alpha,\beta\in R$ with $\beta\neq0$, write
>
> $$
> \frac{\alpha}{\beta}=x+y\sqrt2,
> \qquad x,y\in\mathbb Q.
> $$
>
> Choose integers $a,b$ satisfying $\lvert x-a\rvert\leq1/2$ and $\lvert y-b\rvert\leq1/2$, and set $q=a+b\sqrt2$, $r=\alpha-\beta q$. For $u=x-a$ and $v=y-b$,
>
> $$
> \lvert N(u+v\sqrt2)\rvert
> =\lvert u^2-2v^2\rvert
> \leq\max\{u^2,2v^2\}\leq\frac12.
> $$
>
> Therefore either $r=0$ or
>
> $$
> \phi(r)
> =\phi(\beta)\lvert N(u+v\sqrt2)\rvert
> \leq\frac12\phi(\beta)<\phi(\beta).
> $$
>
> This is Euclidean division with Euclidean function $\phi=\lvert N\rvert$.
>
> We record the consequences needed below. Every nonzero ideal is principal: choose an element of smallest positive $\phi$ and divide every other ideal element by it; the remainder must vanish. In particular a greatest common divisor generates the ideal of two elements and satisfies a Bézout identity. If $\pi$ is irreducible and $\pi\nmid x$, then $(\pi,x)=R$; multiplying a Bézout identity by $y$ proves that $\pi\mid xy$ implies $\pi\mid y$. Thus every irreducible is prime. Factoring a nonunit into two nonunits decreases the positive norm of each factor, so induction on $\phi$ gives factorization into irreducibles. Primality then gives uniqueness by successively matching and cancelling factors. Hence $R$ is a UFD.
>
> **2. All units.** The element $\varepsilon=1+\sqrt2$ has norm $-1$ and inverse $\sqrt2-1$, so every $\pm\varepsilon^n$, $n\in\mathbb Z$, is a unit.
>
> Conversely, change the sign of an arbitrary unit if necessary so that its value in the embedding $\sqrt2>0$ is $u>0$. Since $\varepsilon>1$, there is an integer $n$ such that
>
> $$
> 1\leq w=u\varepsilon^{-n}<\varepsilon.
> $$
>
> Write $w=a+b\sqrt2\in R$. Because $N(w)=\pm1$, we have $\lvert\overline w\rvert=1/w$. Consequently
>
> $$
> \lvert b\rvert
> =\frac{\lvert w-\overline w\rvert}{2\sqrt2}
> \leq\frac{w+w^{-1}}{2\sqrt2}
> <\frac{\varepsilon+\varepsilon^{-1}}{2\sqrt2}=1.
> $$
>
> For completeness, the strict inequality follows for $1\leq w<\varepsilon$ from
>
> $$
> \varepsilon+\varepsilon^{-1}-(w+w^{-1})
> =(\varepsilon-w)\left(1-\frac1{\varepsilon w}\right)>0.
> $$
>
> Thus $b=0$. The positive integer $a=w$ is a unit, so $a=1$. It follows that $u=\varepsilon^n$, proving
>
> $$
> R^\times=\{\pm(1+\sqrt2)^n:n\in\mathbb Z\}.
> $$
>
> **3. The prime-element classification.** Up to multiplication by the units just found, the complete list is:
>
> | Rational prime | Prime elements above it | Factorization behavior |
> |---|---|---|
> | $2$ | $\sqrt2$ | $2=(\sqrt2)^2$; ramified |
> | $p\equiv3,5\pmod8$ | $p$ | $p$ remains prime; inert |
> | $p\equiv1,7\pmod8$ | $\pi_p=a_p+b_p\sqrt2$ and $\overline{\pi_p}=a_p-b_p\sqrt2$, with $a_p^2-2b_p^2=p$ | $p=\pi_p\overline{\pi_p}$; two nonassociate prime factors |
>
> The integers $a_p,b_p$ in the last row always exist. They may be obtained from a generator of $(p,\sqrt2-t)$ for a solution of $t^2\equiv2\pmod p$, and adjusted by a unit of norm $-1$ if necessary. We prove both their existence and the completeness of the table.
>
> **4. Reduction modulo a rational prime.** Since every element of $R$ is uniquely $a+b\sqrt2$, reduction of coefficients gives
>
> $$
> R/(p)\cong\mathbb F_p[X]/(X^2-2).
> $$
>
> For odd $p$, if $2$ is not a square modulo $p$, the degree-two polynomial $X^2-2$ is irreducible, so this quotient is a field and $p$ is a prime element.
>
> Suppose instead that $t^2\equiv2\pmod p$. Then $t\not\equiv0\pmod p$ and $t,-t$ are distinct roots. The evaluation map
>
> $$
> R\longrightarrow\mathbb F_p,
> \qquad
> a+b\sqrt2\longmapsto a+bt
> $$
>
> is a surjective ring homomorphism, with kernel
>
> $$
> P_t=(p,\sqrt2-t).
> $$
>
> Indeed, if $a+bt\equiv0\pmod p$, then $a+b\sqrt2=b(\sqrt2-t)+(a+bt)$ lies in that ideal, and the reverse inclusion follows by evaluation. Since $R$ is a PID, write $P_t=(\pi)$ with $\pi\neq0$. The quotient is $\mathbb F_p$, so $\pi$ is prime and a nonunit. Since $p\in P_t$, write $p=\pi\rho$.
>
> The factor $\rho$ is also a nonunit. Otherwise $(\pi)=(p)$, whereas $\sqrt2-t\in P_t$ does not belong to $(p)$ because its $\sqrt2$ coefficient is $1$. Taking absolute norms now gives
>
> $$
> p^2=\lvert N(\pi)\rvert\,\lvert N(\rho)\rvert,
> \qquad
> \lvert N(\pi)\rvert,\lvert N(\rho)\rvert>1.
> $$
>
> Both factors are positive integer divisors of $p^2$, so each equals $p$. If $N(\pi)=-p$, replace $\pi$ by $\varepsilon\pi$; since $N(\varepsilon)=-1$, this produces a generator $\pi_p=a_p+b_p\sqrt2$ with norm $p$. Therefore
>
> $$
> p=\pi_p\overline{\pi_p},
> \qquad
> a_p^2-2b_p^2=p.
> $$
>
> Conjugation carries $P_t$ to $P_{-t}$. These ideals are different: evaluating $\sqrt2-t$ at $-t$ gives $-2t\neq0$ in $\mathbb F_p$. Thus $\pi_p$ and $\overline{\pi_p}$ are nonassociate prime elements. Unique factorization shows they are the only prime-element classes dividing $p$. In ideal language $(p)=P_tP_{-t}$, which is the split case.
>
> Finally $2=(\sqrt2)^2$, and $R/(\sqrt2)\cong\mathbb F_2$: modulo $\sqrt2$, the integer $2$ vanishes and only the parity of the constant coefficient remains. Hence $\sqrt2$ is prime and is the only prime-element class dividing $2$. The repeated ideal factor $(2)=(\sqrt2)^2$ is the ramified case.
>
> **5. Decide when $2$ is a square modulo $p$.** We include the elementary argument, so no quadratic reciprocity theorem is needed. Put $m=(p-1)/2$. Among the residues
>
> $$
> 2,4,\ldots,2m=p-1,
> $$
>
> replace each one exceeding $p/2$ by its negative representative modulo $p$. The absolute values of the resulting signed representatives are a permutation of $1,\ldots,m$. To check distinctness, equal absolute values would give $2j\equiv\pm2k\pmod p$; for $1\leq j,k\leq m$, the plus case gives $j=k$ and the minus case is impossible because $2\leq j+k\leq p-1$.
>
> The number of negative representatives is
>
> $$
> \nu=m-\left\lfloor\frac p4\right\rfloor.
> $$
>
> Multiplying all signed representatives and cancelling the nonzero residue $m!$ gives
>
> $$
> 2^m m!\equiv(-1)^\nu m!\pmod p,
> \qquad
> 2^m\equiv(-1)^\nu\pmod p.
> $$
>
> The nonzero squares in $\mathbb F_p$ are exactly the roots of $X^m-1$. There are $m$ such squares, because $a$ and $-a$ are the two square roots of each nonzero square. Also every $a\neq0$ satisfies $a^{p-1}=1$: multiplication by $a$ permutes the nonzero residues, and cancellation of their product proves this identity. Thus all $m$ squares are roots, and a degree-$m$ polynomial over a field has no additional roots. It follows that $2$ is a square precisely when $2^m=1$, or equivalently when $\nu$ is even.
>
> For $p\equiv1,3,5,7\pmod8$, respectively, $\nu$ is even, odd, odd, even. Therefore
>
> $$
> 2\text{ is a square modulo }p
> \quad\Longleftrightarrow\quad
> p\equiv1\text{ or }7\pmod8.
> $$
>
> This proves the congruence conditions in the classification table.
>
> **6. No other prime elements occur.** Let $\varpi$ be any prime element of $R$. It divides the nonzero rational integer $N(\varpi)=\varpi\overline\varpi$, whose absolute value is at least $2$. Factor that integer into positive rational primes. Repeatedly applying primality shows that $\varpi$ divides one of these primes $p$. The factorizations above then imply that $\varpi$ is associated to $\sqrt2$, to an inert rational prime, or to one of the two displayed prime factors of a split prime. This proves completeness.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields]]
- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers]]

## Notes

- **Source and proof status.** The complete three-part request was checked directly against [S4, Ch. I, §1, Exercise 7, printed p. 5, PDF p. 24]. The source gives no subdivision or hint for this exercise; the proof stages and classification table are independent exposition. No source error was found.
- **Norm convention.** The field norm $a^2-2b^2$ takes both signs; the Euclidean function is its absolute value. This distinction is essential.
- **Classification convention.** A prime element means a nonzero nonunit generating a prime ideal. The table lists associate classes; multiplying any representative by any $\pm(1+\sqrt2)^n$ gives all actual prime elements. For a split rational prime the two conjugate classes are different, while the prime over $2$ occurs twice in its factorization.
- **Proof inputs.** The solution uses elementary integer prime factorization, finite-field arithmetic, the root bound for a polynomial over a field, and the Archimedean property of the real numbers. Euclidean factorization, the unit classification, the square criterion for $2$, the existence of split prime generators, and the exhaustiveness argument are proved above. No Dirichlet unit theorem, general ideal-factorization theorem for number fields, or quadratic reciprocity theorem is imported.
- **Routing.** The principal methods are Euclidean division, unit computations, quotient rings, and prime factorization, so the note belongs to Ring Theory.
